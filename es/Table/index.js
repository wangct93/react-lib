import DefineComponent from "../frame/components/DefineComponent";
import React from "react";
import {aryToObject, classNames, random, toAry, toNum, toStr} from "@wangct/util";
import Form from "../Form";
import BtnList from "../BtnList";
import {isFunc, objFind, toPromise} from "@wangct/util";
import {getResizeSign, reduxConnect, showLoading,alertErrInfo,alertSucInfo} from "../frame";
import Pagination from "../Pagination";
import Checkbox from "../Checkbox";
import {callFunc} from "@wangct/util/lib/util";

/**
 * 表格组件
 * @author wangchuitong
 */
@reduxConnect(() => ({
  resizeSign:getResizeSign(),
}))
export default class Table extends DefineComponent {
  state = {
    columns:[],
    // data:getTestData(columns),
    hasScrollX:false,
    hasScrollY:false,
    fontSize:14,
    scrollLeftMin:true,
    scrollLeftMax:true,
    rowSelection:{

    },
    rowClick:true,
  };

  componentDidMount() {
    this.checkScroll();
    this.initFontSize();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.checkScroll();
  }

  checkScroll(){
    this.setState({
      hasScrollX:this.hasScrollX(),
      hasScrollY:this.hasScrollY(),
    });
    this.updateFixedScroll();
  }

  initFontSize(){
    this.setState({
      fontSize:toNum(getComputedStyle(this.getElem()).fontSize),
    });
  }


  hasScrollY(){
    const bodyElem = this.getElem().querySelector('.w-table-body');
    const tableElem = bodyElem && bodyElem.children[0];
    if(!tableElem){
      return false;
    }
    // console.log(tableElem,bodyElem,tableElem.getBoundingClientRect().height, bodyElem.getBoundingClientRect().height);
    return tableElem.getBoundingClientRect().height > bodyElem.getBoundingClientRect().height;
  }

  hasScrollX(){
    const bodyElem = this.getElem().querySelector('.w-table-body');
    const trElem = bodyElem.querySelector('.w-table-tr');
    if(!trElem){
      return false;
    }
    const tdSumWidth = Array.from(trElem.children || []).reduce((pv,item) => {
      return pv + item.offsetWidth;
    },0);
    return tdSumWidth > trElem.getBoundingClientRect().width;
  }

  getData(){
    return toAry(this.getProp('data'));
  }

  getTdStyle(col,hasFitColumn = false){
    const style = {};
    const width = this.getColWidth(col);
    if(col.fitWidth === false || col.fixed != null){
      style.flex = `0 0 ${getCssValue(width)}`;
    }else if(col.width === false){
      style.flex = `1 0 ${getCssValue(width)}`;
    }else{
      if(hasFitColumn){
        style.flex = `0 0 ${getCssValue(width)}`;
      }else{
        style.flex = `1 0 ${getCssValue(width)}`;
      }
    }

    return style;
  }

  isFit(){
    return this.getProp('fit');
  }

  doTest = () => {
    return;
    this.setState({
      data:getTestData(this.state.columns,Math.floor(Math.random() * 40)),
    });
  };

  bodyScroll = (e) => {
    const {target} = e;
    const header = this.getElem().querySelector('.w-table-tr');
    header.scrollLeft = target.scrollLeft;

    this.updateFixedScroll();

  };

  updateFixedScroll(){
    const bodyElem = this.getElem().querySelector('.w-table-body');

    // 更新右固定的滚动条
    const rightScrollElem = this.getElem().querySelector('.w-table-fixed-right .w-table-body');
    if(rightScrollElem){
      rightScrollElem.scrollTop = bodyElem.scrollTop;
    }

    // 更新左固定的滚动条
    const leftScrollElem = this.getElem().querySelector('.w-table-fixed-left .w-table-body');
    if(leftScrollElem){
      leftScrollElem.scrollTop = bodyElem.scrollTop;
    }

    const scrollLeft = bodyElem.scrollLeft;
    const trElem = bodyElem.querySelector('.w-table-tr');
    if((leftScrollElem || rightScrollElem) && trElem){
      const tdSumWidth = Array.from(trElem.children || []).reduce((pv,item) => {
        return pv + item.offsetWidth;
      },0);
      const scrollLeftMaxValue = Math.max(tdSumWidth - bodyElem.children[0].offsetWidth,0);
      this.setState({
        scrollLeftMin:scrollLeft === 0,
        scrollLeftMax:scrollLeft === scrollLeftMaxValue,
      });
    }
  }

  getColWidth(col){
    const {title,width} = col;
    return width ? width : toStr(title).length * this.getFontSize() + 20;
  }

  getFontSize(){
    return this.getProp('fontSize') || 14;
  }

  getTrProps(row,index){
    const onRow = this.getProp('onRow');
    let tdProps = {};
    if(isFunc(onRow)){
      tdProps = onRow(row,index);
    }else{
      tdProps = onRow || {};
    }
    const rowSelection = this.getProp('rowSelection');
    if(rowSelection && this.getProp('rowClick')){
      const tempClick = tdProps.onClick;
      tdProps.onClick = (e) => {
        const key = this.getRowKey(row,index);
        const checked = this.getSelectedKeys().includes(key);
        this.checkChange(key,!checked);
        callFunc(tempClick,e);
      };
    }
    return tdProps;
  }

  getSelectedKeys(){
    const rowSelection = this.getProp('rowSelection');
    const keys = rowSelection && rowSelection.selectedKeys;
    if(keys){
      return keys;
    }
    return toAry(this.getProp('selectedKeys'));
  }

  setSelectedKeys = (keys,rows) => {
    this.setState({
      selectedKeys:keys,
      selectedRows:rows,
    });
    callFunc(this.props.onSelect,keys,rows);
    const rowSelection = this.getProp('rowSelection');
    if(rowSelection && rowSelection.onChange){
      rowSelection.onChange(keys,rows);
    }
  };

  getRowKey(row,index){
    return index + '';
  }

  allCheckChange = (checked) => {
    if(checked){
      const data = this.getData();
      this.setSelectedKeys(data.map((item,index) => this.getRowKey(item,index)),data);
    }else{
      this.setSelectedKeys([],[]);
    }
  };

  checkChange = (key,checked) => {
    const selectedKeys = this.getSelectedKeys();
    if(checked){
      this.setSelectedKeys([...selectedKeys,key])
    }else{
      this.setSelectedKeys(selectedKeys.filter((sKey) => sKey != key));
    }
  };

  getColumns(){
    const columns = super.getColumns();
    const rowSelection = this.getProp('rowSelection');
    if(rowSelection){
      const isRadio = rowSelection.type === 'radio';
      const selectedKeys = this.getSelectedKeys();
      const data = this.getData();
      const map = aryToObject(selectedKeys,(key) => key,() => true);
      const isAllChecked = data.length && data.every((item,index) => {
        return map[this.getRowKey(item,index)];
      });
      return [
        {
          title:isRadio ? '' : <Checkbox value={isAllChecked} onChange={this.allCheckChange} />,
          field:'__select',
          fitWidth:false,
          width:60,
          fixed:'left',
          render:(v,row,index) => {
            const key = this.getRowKey(row,index);
            const props = rowSelection.getCheckboxProps ? rowSelection.getCheckboxProps(row,index) : {};
            return <Checkbox {...props} value={map[key]} onChange={this.checkChange.bind(this,key)} />;
          },
        },
        ...columns,
      ]
    }
    return columns;
  }

  getFixedContent(options = {}){
    const {hasFitColumn,isLeft = true} = options;
    const columns = this.getColumns().filter((col) => col.fixed === (isLeft ? 'left' : 'right'));
    const getFixedWidth = (columns) => {
      return columns.reduce((pv,item) => {
        return this.getColWidth(item) + pv;
      },0);
    };
    const className = isLeft ? 'w-table-fixed-left' : 'w-table-fixed-right';
    if(!columns.length){
      return null;
    }
    return <div className={className} style={{width:getFixedWidth(columns)}}>
      <div className="w-table-header">
        <div className="w-table-tr">
          {
            columns.map((col,index) => {
              return <div style={this.getTdStyle(col,hasFitColumn)} className="w-table-td w-table-header-td" key={index}>
                <div className="w-table-td-content">{col.title}</div>
              </div>;
            })
          }
        </div>
      </div>
      <div className="w-table-body">
        <div className="w-table-content">
          {
            this.getData().map((row,rowIndex) => {
              const trProps = this.getTrProps(row,rowIndex);
              return <div {...trProps} className={classNames('w-table-tr',trProps.className)} key={rowIndex}>
                {
                  columns.map((col,index) => {
                    const {render} = col;
                    let value = row[col.field];
                    value = render ? render(value,row,rowIndex) : value;
                    return <div style={this.getTdStyle(col,hasFitColumn)} className="w-table-td" key={index}>
                      <div className="w-table-td-content">
                        {value}
                      </div>
                    </div>;
                  })
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  }

  render() {
    // console.log(this.state);
    const columns = this.getColumns();
    const {state} = this;
    const hasFitColumn = columns.some((col) => {
      return col.width === false;
    });
    return <div onClick={this.doTest} ref={this.setElem} className={classNames('w-table',this.isFit() && 'w-table-fit',state.hasScrollX && 'w-table-scroll-x',state.hasScrollY && 'w-table-scroll-y')}>
      <div className="w-table-header">
        <div className="w-table-tr">
          {
            columns.map((col,index) => {
              return <div style={this.getTdStyle(col,hasFitColumn)} className="w-table-td w-table-header-td" key={index}>
                <div className="w-table-td-content">
                  {col.title}
                </div>
              </div>;
            })
          }
        </div>
      </div>
      <div onScroll={this.bodyScroll} className="w-table-body">
        <div className="w-table-content">
          {
            this.getData().map((row,rowIndex) => {
              return <div className="w-table-tr" key={rowIndex}>
                {
                  columns.map((col,index) => {
                    const {render} = col;
                    let value = row[col.field];
                    value = render ? render(value,row,index) : value;
                    return <div style={this.getTdStyle(col,hasFitColumn)} className="w-table-td" key={index}>
                      <div className="w-table-td-content">
                        {value}
                      </div>
                    </div>;
                  })
                }
              </div>
            })
          }
        </div>
      </div>
      <div className={classNames('w-table-fixed',state.scrollLeftMin && 'w-table-fixed-scroll-left-min',state.scrollLeftMax && 'w-table-fixed-scroll-left-max')}>
        {
          this.getFixedContent({
            hasFitColumn,
          })
        }
        {
          this.getFixedContent({
            isLeft:false,
            hasFitColumn,
          })
        }
      </div>
    </div>;
  }
}

function getTestData(columns,length = 10){
  return new Array(length).fill(1).map((a,index) => {
    return aryToObject(columns,'field',(item) => item.title);
  });
}

/**
 * 获取css值
 * @author wangchuitong
 */
function getCssValue(value){
  value = toStr(value);
  return value.includes('%') ? value : value + 'px';
}

/**
 * 查询表格
 */
export class TableSearch extends DefineComponent {

  state = {
    pageNumField:'page_num',
    pageSizeField:'page_size',
    totalField:'total',
    dataField:'list',
    fit:true,
    pagination:{
      current:1,
      pageSize:20,
      total:0,
      pageSizeOptions:['10','20','50','100','1000'],
      showQuickJumper:true,
      showSizeChanger:true,
      ...this.props.defaultPagination,
    },
    loading:true,
  };

  componentDidMount() {
    this.initSearch();
  }

  initSearch(){
    if(this.props.defaultSearch){
      this.doSearch();
    }
  }

  getBtnOptions(){
    const {btnOptions = ['search','reset']} = this.props;
    const mapData = {
      search:{
        title:'查询',
        onClick:this.doSearch.bind(this,{}),
        type:'primary',
        auth:this.getProp('searchAuth'),
      },
      reset:{
        title:'重置',
        onClick:this.doReset,
        type:'primary',
        auth:this.getProp('resetAuth'),
      },
    };
    return toAry(btnOptions).map((opt) => {
      return mapData[opt] || opt;
    });
  }

  getPageParams(pageNum,pageSize){
    return {
      [this.getProp('pageNumField')]:pageNum,
      [this.getProp('pageSizeField')]:pageSize
    };
  }

  doSearch = (extParams = {}) => {
    this.getForm().validator().then((params) => {
      params = {
        ...params,
        ...extParams,
      };
      const {beforeLoad} = this.props;
      const pagination = this.getProp('pagination');
      params = beforeLoad ? beforeLoad(params) : params;
      if(!params){
        return;
      }
      this.pageChange(1,pagination.pageSize,params);
    }).catch((err) => {
      const msg = objFind(err,value => !!value);
      alertErrInfo(toStr(msg));
    });
  };

  doReload = () => {
    return this.loadData();
  };

  doReset = () => {
    this.setState({
      list:[],
    });
    this.formChange({});
    this.updatePagination({
      total:0,
    });
  };

  updatePagination(pagination){
    this.setState({
      pagination:{
        ...this.getPagination(),
        ...pagination,
      },
    });
  }

  getPagination(){
    return this.getProp('pagination');
  }

  pageChange = (pageNum,pageSize,params = this.state.oldParams) => {
    this.updatePagination({
      current:pageNum,
      pageSize,
    });
    this.loadData({
      ...params,
      ...this.getPageParams(pageNum,pageSize)
    });
  };

  loadData(params = this.state.oldParams){
    let pro = toPromise(this.props.loadData,params).then((data = {}) => {
      const {afterLoad} = this.props;
      const pagination = this.getPagination();
      const {current,pageSize} = pagination;
      data = isFunc(afterLoad) ? afterLoad(data) : data;
      const total = data[this.getProp('totalField')];
      const list = toAry(data[this.getProp('dataField')]);
      const maxPage = Math.ceil(total / pageSize);
      if(current > maxPage && maxPage){
        this.pageChange(maxPage,pageSize);
      }else{
        this.updatePagination({
          total,
        });
        this.setState({
          oldParams:params,
          list,
        });
        this.getTable().setSelectedKeys([],[]);
        if(this.getProp('alertInfo') !== false){
          alertSucInfo(`查询到${list.length}条数据`);
        }
      }
    });
    if(this.getProp('loading')){
      pro = showLoading(pro);
    }
    return pro;
  }

  isFit(){
    return this.getProp('fit');
  }

  hasPagin(){
    return toNum(this.getPagination().total) > 0;
  }

  render() {
    const {props} = this;
    return <div className={classNames('w-table-search',this.isFit() && 'w-table-search-fit',this.props.className)}>
      <div className="w-header">
        <Form className="w-table-form" itemWidth="50%" ref={this.setForm} options={this.props.filterOptions} value={this.getFormValue()} onChange={this.formChange} />
        <BtnList options={this.getBtnOptions()} />
      </div>
      <div className="w-body">
        <Table
          {...props.tableProps}
          columns={this.getColumns()}
          data={this.getList()}
          fit={this.isFit()}
          ref={this.setTable}
          onSelect={props.onSelect}
          onRow={props.onRow}
        />
      </div>
      <div className="w-footer">
        {
          this.hasPagin() && <Pagination {...this.getPagination()} onChange={this.pageChange} onShowSizeChange={this.pageChange} />
        }
      </div>
    </div>
  }
}

Table.Search = TableSearch;
