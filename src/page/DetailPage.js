import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Item from '../component/Item';

class DetailPage extends Component {

  render() {
    return (
      <div className="ItemDetailPage">
        <Link to="/">返回</Link>
        <Item item={this.props.item}/>
      </div>
    );
  }
}

export default DetailPage;
