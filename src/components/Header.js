import React, { Component } from "react";
import Input from "./Input";

class Header extends Component {
  render() {
    return (
      <div className="card header mt-5 col-md-6 mx-auto bg-info text-light">
        <div className="card-body text-center">
          <h1>{this.props.title}</h1>
          <Input tasks={this.props.tasks} addTask={this.props.addTask} />
        </div>
      </div>
    );
  }
}

export default Header;
