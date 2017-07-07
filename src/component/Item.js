import React, {Component} from 'react';

class Item extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="Item" onClick={this.props.onClick}>
        <img className="img" src={item.img} alt="随机图片"/>
        <p>{item.value}</p>
      </div>
    );
  }
}

export default Item;
