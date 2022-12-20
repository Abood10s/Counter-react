import Counter from "./Counter/Counter";
import React, { Component } from "react";

const counters = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 1 },
  { id: 3, count: 0, steps: 1 },
  { id: 4, count: 0, steps: 1 },
];
class App extends Component {
  state = {
    counters,
  };

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
  onDecrement = (idd) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === idd && item.count > 0) {
            return { ...item, count: item.count - 1 };
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
      </div>
    );
  }
}

export default App;
