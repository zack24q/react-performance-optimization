import React, {PureComponent} from 'react';
import 'react-virtualized/styles.css'
import List from 'react-virtualized/dist/commonjs/List'
import Item from './Item';

class ListComponent extends PureComponent {

  onClick = (item) => {
    this.props.onClick(item)
  };

  rowRenderer = ({key, index, style}) => {
    const item = this.props.items[index];
    return <div className="row" key={key} style={style}>
      <Item item={item} onClick={this.onClick}/>
    </div>
  };

  render() {
    return (
      <div className="List">
        <List
          width={310}
          height={541}
          rowCount={this.props.items.length}
          rowHeight={242}
          rowRenderer={this.rowRenderer}
        />

        {
          this.props.items.map((item, i) => (
            <div className="row" key={item.id}>
              <Item item={item} onClick={this.onClick}/>

              {/*<div className="Item" onClick={this.onClickIndex(i)}>*/}
              {/*<img className="img" src={item.img} alt="随机图片"/>*/}
              {/*<p>{item.value}</p>*/}
              {/*</div>*/}
            </div>
          ))
        }
      </div>
    );
  }
}

export default ListComponent;
