import React, {Component} from 'react';

class Time extends Component {
  render() {
    const time = this.props.time;
    return (
      <div className="Time">
        {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
      </div>
    );
  }
}

export default Time;
