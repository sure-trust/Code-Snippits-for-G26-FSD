import React, { Component } from "react";
import "./CounterApp.css";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="container">
        <div className="counter-box">
          <h1 className="title">Counter App</h1>
          <p className="counter-value">{this.state.count}</p>
          <div className="button-group">
            <button className="btn" onClick={this.handleIncrement}>
              +
            </button>
            <button className="btn" onClick={this.handleReset}>
              Reset
            </button>
            <button className="btn" onClick={this.handleDecrement}>
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterApp;
