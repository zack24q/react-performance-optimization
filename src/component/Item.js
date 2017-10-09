import React, {Component} from 'react';

class Item extends Component {
  onClick = () => {
    this.props.onClick(this.props.item)
  };

  render() {
    const item = this.props.item;
    return (
      <div className="Item" onClick={this.onClick}>
        <img className="img" src={item.img} alt="随机图片"/>
        <p>{item.value}</p>
      </div>
    );
  }
}

// function Item(props) {
//   return (
//     <div className="Item" onClick={props.onClick}>
//       <img className="img" src={props.item.img} alt="随机图片"/>
//       <p>{props.item.value}</p>
//     </div>
//   );
// }

export default Item;
