import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Store from '../store';
import Item from '../component/Item';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      item: Store.getItems()[this.props.match.params.id]
    };
  }

  render() {
    return (
      <div className="DetailPage">
        <Link to="/">返回</Link>
        <div className="content">
          <Item item={this.state.item}/>
        </div>
      </div>
    );
  }
}

export default DetailPage;
