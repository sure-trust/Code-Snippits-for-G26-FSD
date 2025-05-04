import React from 'react';
import './App.css';

class App extends React.Component
 {
    state = { count: 0 };

    increment = () => this.setState({ count: this.state.count + 1 });
    decrement = () => this.setState({ count: this.state.count - 1 });
    reset = () => this.setState({ count: 0 });

    render()
     {
        return (
            <div className="container">
                <h1>Counter: {this.state.count}</h1>
                <button className="increment" onClick={this.increment}>Increment</button>
                <button className="decrement" onClick={this.decrement}>Decrement</button>
                <button className="reset" onClick={this.reset}>Reset</button>
            </div>
);
}
}

export default App;