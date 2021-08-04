import React, { Component } from "react";
export default class Input extends Component {
  state = {
    todo: "",
  };
  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo.length > 0) {
      this.props.add(this.state.todo);
      this.setState({ todo: "" });
    } else {
      alert("Enter a task");
    }
  };
  render() {
    return (
      <div className="form">
        <form>
          <label>
            <input
              type="text"
              placeholder="Enter a task..."
              value={this.state.todo}
              onChange={this.handleChange}
            ></input>
          </label>
          <button className="btn" onClick={this.handleSubmit}>
            Add
          </button>
        </form>
        <h3>Task :</h3>
      </div>
    );
  }
}
