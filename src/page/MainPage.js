import React, {Component} from 'react';
import Store from '../store';
import Time from '../component/Time';
import List from '../component/List';


// function randomSort(array) {
//   const _array = array.slice();
//   _array.sort(() => 0.5 - Math.random());
//   return _array;
// }

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      items: Store.getItems()
    };
    console.time('componentDidMount');
  }

  componentWillMount() {
  }

  componentDidMount() {
    console.timeEnd('componentDidMount');
    // this.interval = setInterval(() => {
    //   this.setState({
    //     time: new Date(),
    //     // items: randomSort(this.state.items)
    //   });
    // }, 1000);
  }

  componentWillUpdate() {
    console.time('componentDidUpdate');
  }

  componentDidUpdate() {
    console.timeEnd('componentDidUpdate');
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  onClick = (item) => {
    const items = this.state.items.slice();
    const i = items.indexOf(item);
    this.props.history.push(`/detail/${i}`);
    // const random = Math.random().toFixed(6);
    // items[i] = {
    //   id: i,
    //   value: random,
    //   img: defaultImgs[i % 10]
    // };
    // console.time('componentDidUpdate');
    // this.setState({items});
  };

  onTest = () => {
    const items = this.state.items.slice(0, 100);
    this.setState({items});
  };

  render() {
    return (
      <div className="MainPage">
        <Time time={this.state.time}/>
        <button onClick={this.onTest}>test</button>
        <List items={this.state.items} onClick={this.onClick}/>
      </div>
    );
  }
}

export default MainPage;
