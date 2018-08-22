import React, { Component } from "react";

class Task extends Component {
  handleChange = event => {
    const updatedTask = {
      ...this.props.details,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateTask(this.props.index, updatedTask);
    event.preventDefault();
  };
  render() {
    return (
      <div className="input-group mt-1">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          name="name"
          value={this.props.details.name}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-danger" type="button">
            🗑
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
