import React from "react";
import Header from "./Header";
import Task from "./Task";
import "../css/App.css";

class App extends React.Component {
  state = {
    tasks: {}
  };

  componentDidMount() {
    console.log("mounting..");
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.setState({ tasks });
    }
  }

  addTask = task => {
    const tasks = { ...this.state.tasks };
    tasks[`task${Date.now()}`] = task;
    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  editTask = (index, updatedTask) => {
    console.log("editing task");
  };

  deleteTask = index => {
    const tasks = { ...this.state.tasks };
    delete tasks[index];
    this.setState({ tasks });
    const tasksInStorage = JSON.parse(localStorage.getItem("tasks"));
    if (tasksInStorage) {
      delete tasksInStorage[index];
      localStorage.setItem("tasks", JSON.stringify(tasksInStorage));
    } else {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  };

  render() {
    return (
      <div className="container">
        <Header
          title={"Todo List React App"}
          tasks={this.state.tasks}
          addTask={this.addTask}
        />
        <ul className="col-md-6 mx-auto mt-5 list-group list-group-flush">
          {Object.keys(this.state.tasks).map(key => (
            <Task
              key={key}
              index={key}
              details={this.state.tasks[key]}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
