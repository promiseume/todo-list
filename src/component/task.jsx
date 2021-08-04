import React, { Component } from "react";
import Todo from './todo';

export default class Task extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <ol className="task">
        {tasks.map((task,index) => (
          <Todo taskId={index} key={index} task={task} onDelete={this.props.onDelete}/>
        ))}
      </ol>
    );
  }
}
