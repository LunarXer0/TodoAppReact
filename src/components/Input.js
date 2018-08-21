import React, { Component } from "react";

class Input extends Component {
  nameRef = React.createRef();

  createTask = event => {
    event.preventDefault();
    const task = { name: this.nameRef.value.value, status: "unfinished" };
    this.props.addTask(task);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form onSubmit={this.createTask}>
        <input
          name="name"
          className="form-control"
          ref={this.nameRef}
          type="text"
          placeholder="Enter Task"
        />
      </form>
    );
  }
}

export default Input;
