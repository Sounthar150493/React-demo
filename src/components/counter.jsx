import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ['tag1', 'tag2', 'tag3'],
  };
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          type="button"
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.state.value === 0 ? 'warning' : 'info';
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
