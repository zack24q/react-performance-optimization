import React, {Component} from 'react';
import Item from './Item';

class List extends Component {

  onClickIndex = (i) => () => {
    this.props.onClickIndex(i)
  };

  render() {
    return (
      <div className="List">
        {
          this.props.items.map((item, i) => (
            <div className="col" key={item.id}>
              <Item item={item} onClick={this.onClickIndex(i)}/>
            </div>
          ))
        }
      </div>
    );
  }
}

export default List;
