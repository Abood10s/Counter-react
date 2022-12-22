import Counter from "./Counter/Counter";
import React, { Component } from "react";

const counters = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 2 },
  { id: 3, count: 0, steps: 3 },
  { id: 4, count: 0, steps: 4 },
];
class App extends Component {
  state = {
    counters,
  };

  componentDidUpdate() {}

  onIncrement = (id, steps = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + steps };
          }
          return item;
        }),
      };
    });
  };
  onDecrement = (idd, steps) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === idd && item.count > 0) {
            return { ...item, count: item.count - item.steps };
          }
          return item;
        }),
      };
    });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((item) => (
          <Counter
            key={item.id}
            {...item}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
          />
        ))}
        <div className="total">
          <h4 className="total-title">Total : </h4>

          <p className="total-p">
            {this.state.counters.reduce(
              (accumulator, currentValue) => accumulator + currentValue.count,
              0
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
