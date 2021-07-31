import React, { Component } from "react";
import Input from "./component/input";
import Task from "./component/task";

export default class App extends Component {
  state = {
    tasks: [],
  };
  onSubmit = (tasks) => {
    this.setState({ tasks: this.state.tasks.concat(tasks) });
  };
  render() {
    return (
      <div className="App">
        <Input add={this.onSubmit} />
        <Task tasks={this.state.tasks} />
      </div>
    );
  }
}
