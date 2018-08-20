import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.props.details.name}
        <span className="pull-right button-group">
          <button className="btn btn-sm btn-default">
            Edit
            <span role="img" aria-label="pencil">
              ✏️
            </span>
          </button>
          &nbsp;
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
