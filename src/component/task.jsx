import React, { Component } from "react";

export default class Task extends Component {
  render() {
    return (
      <ol className="task">
        {this.props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    );
  }
}
