import React from "react";
import "./Counter.scss";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: +this.props.children,
    };
  }

  increment = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  decrement = () => {
    const { value } = this.state;
    this.setState({ value: value - 1 });
  };

  reset = () => {
    this.setState({ value: +this.props.children });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="content-box">
        <div className="controls">
          <button onClick={this.increment}>+</button>
          <p>{value}</p>
          <button onClick={this.decrement}>-</button>
        </div>
        <button className="reset-btn" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}
