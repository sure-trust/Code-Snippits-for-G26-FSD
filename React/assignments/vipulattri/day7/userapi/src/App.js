import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      user: null,
    };
    console.log('constructor() - Component is being constructed');
  }

  componentDidMount() {
    console.log('componentDidMount() Component mounted');
    this.fetchUser(this.state.counter);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log('componentDidUpdate() Counter componeont updated:', this.state.counter);
      this.fetchUser(this.state.counter);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() - Component will unmount, cleanup if needed');
  }

  fetchUser = (id) => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          this.setState({ user: data.data });
        } else {
          this.setState({ user: null });
        }
      });
  };

  handleIncrease = () => {
    this.setState((prevState) => ({ counter: Number(prevState.counter) + 1 }));
  };

  handleDecrease = () => {
    this.setState((prevState) => {
      if (prevState.counter > 1) {
        return { counter: Number(prevState.counter) - 1 };
      }
      return null;
    });
  };

  handleInputChange = (e) => {
    this.setState({ counter: e.target.value });
  };

  render() {
    console.log('render() Component rendered');
    const { counter, user } = this.state;

    return (
      <div className="container mt-5 text-center">
        <h1 className="mb-4 text-primary">User Api Assignment</h1>

        <input
          type="number"
          className="form-control mb-3 w-50 mx-auto shadow-sm border-primary"
          value={counter}
          onChange={this.handleInputChange}
          placeholder="Enter user ID"
        />

        <div className="d-flex justify-content-center gap-3 mb-4">
          <button className="btn btn-success shadow-sm" onClick={this.handleIncrease}>
            Increase
          </button>
          <button className="btn btn-danger shadow-sm" onClick={this.handleDecrease}>
            Decrease
          </button>
        </div>

        {user ? (
          <div className="card mx-auto p-4 shadow-lg" style={{ maxWidth: '400px' }}>
            <img
              src={user.avatar}
              className="card-img-top rounded-circle border border-primary p-1"
              alt="User Avatar"
            />
            <div className="card-body">
              <h5 className="card-title text-info">
                {user.first_name} {user.last_name}
              </h5>
              <p className="card-text">
                📧 <strong>{user.email}</strong>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-danger">No user found</p>
        )}
      </div>
    );
  }
}

export default App;
