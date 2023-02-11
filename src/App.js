import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  // Mounting: constructor >> JS thing, not a big deal
  // constructor(props) {
  //   super(props);
  //   console.log("hello");
  // }
  state = {
    count: 0,
  };
  add = () => {
    // console.log("add");
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    // console.log("minus");
    this.setState({ count: this.state.count - 1 });
  };

  counponentDidMount() {
    console.log("didmount");
  }
  componentDidUpdate() {
    console.log("didUpdate");
  }
  componentWillUnmount() {
    // when component goes away
    console.log("willunmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
