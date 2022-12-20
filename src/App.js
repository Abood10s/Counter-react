import Counter from "./Counter/Counter";
import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
  };
  onIncrement = (n) => {
    this.setState((prevState) => ({
      counter: prevState.counter + n,
    }));
  };
  onDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  render() {
    return (
      <div>
        <Counter
          onIncrement={() => this.onIncrement(5)}
          onDecrement={this.onDecrement}
          counter={this.state.counter}
        />
        <Counter
          onIncrement={() => this.onIncrement(10)}
          onDecrement={this.onDecrement}
          counter={this.state.counter}
        />
        <Counter
          onIncrement={() => this.onIncrement(15)}
          onDecrement={this.onDecrement}
          counter={this.state.counter}
        />
        <Counter
          onIncrement={() => this.onIncrement(20)}
          onDecrement={this.onDecrement}
          counter={this.state.counter}
        />
      </div>
    );
  }
}

export default App;
