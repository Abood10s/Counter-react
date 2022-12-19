import React, { Component } from "react";
import "./counter.css";
class Counter extends Component {
  state = {
    count: 1,
  };

  increment = (n) => {
    this.setState((prevState) => ({
      count: prevState.count + n,
    }));
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div className="counter-cont">
        <div className="count">{this.state.count}</div>
        <div>
          <button className="dec" onClick={this.decrement}>
            -
          </button>
        </div>
        <div>
          <button className="inc" onClick={() => this.increment(5)}>
            +
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
