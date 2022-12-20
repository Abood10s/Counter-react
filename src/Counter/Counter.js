import React, { Component } from "react";
import "./counter.css";
class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="counter-cont">
        <div className="count">{this.state.count || this.props.counter}</div>
        <div>
          <button className="dec" onClick={this.props.onDecrement}>
            -
          </button>
        </div>
        <div>
          <button className="inc" onClick={() => this.props.onIncrement()}>
            +
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
