import React, { Component } from "react";
import "./CounterApp.css";
import refreshIcon from '../assets/refresh-icon.png'

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="container">
        <button className="btn left" onClick={this.decrement}>
          -
        </button>
        <div className="count">{this.state.count}</div>
        <button className="btn right" onClick={this.increment}>
          +
        </button>

        <button className="reset-btn" onClick={this.reset}>
          <img src={refreshIcon} alt="Reset" />
        </button>
      </div>
    );
  }
}

export default CounterApp;
