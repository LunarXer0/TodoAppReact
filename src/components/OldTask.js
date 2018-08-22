import React, { Component } from "react";

class Task extends Component {
  render() {
    const checkCompleted = this.props.details.status === "finished";
    const setDisplay = checkCompleted ? "none" : "";
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.props.details.name}
        <span className="pull-right button-group">
          <button
            style={{
              display: setDisplay
            }}
            className="btn btn-sm btn-default"
            onClick={() => this.props.completeTask(this.props.index)}
          >
            Done
            <span role="img" aria-label="pencil">
              ✔️
            </span>
          </button>
          <button
            className="btn btn-sm btn-default"
            onClick={() => this.props.deleteTask(this.props.index)}
          >
            Delete
            <span role="img" aria-label="thrash">
              🗑️
            </span>
          </button>
        </span>
      </li>
    );
  }
}

export default Task;
