import React, { Component } from "react";
import "./counter.css";
class Counter extends Component {
  render() {
    return (
      <div className="counter-cont">
        <div className="count">{this.props.count}</div>
        <button
          onClick={() => this.props.onDecrement(this.props.id)}
          className="dec"
        >
          -
        </button>
        <button
          onClick={() =>
            this.props.onIncrement(this.props.id, this.props.steps)
          }
          className="inc"
        >
          +
        </button>
      </div>
    );
  }
}
export default Counter;
