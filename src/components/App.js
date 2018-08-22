import React from "react";
import Header from "./Header";
import Task from "./Task";
import {
  CompletedTasksBtn,
  UnfinishedTasksBtn,
  ShowAllTasksBtn
} from "./DisplayTasksBtns";
import "../css/App.css";

class App extends React.Component {
  state = {
    tasks: {},
    visibilityFilter: "unfinished"
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

  completeTask = index => {
    console.log("completing task..");
    const tasks = { ...this.state.tasks };
    tasks[index].status = "finished";
    this.setState({ tasks });
    const tasksInStorage = JSON.parse(localStorage.getItem("tasks"));
    if (tasksInStorage) {
      tasksInStorage[index].status = "finished";
      localStorage.setItem("tasks", JSON.stringify(tasksInStorage));
    } else {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  };

  updateTask = (index, updatedTask) => {
    const tasks = { ...this.state.tasks };
    tasks[index] = updatedTask;
    this.setState({ tasks });
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

  generateList = () => {
    const showAll = this.state.visibilityFilter === "all";
    if (showAll) {
      const list = Object.keys(this.state.tasks).map(key => (
        <Task
          key={key}
          index={key}
          details={this.state.tasks[key]}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
          updateTask={this.updateTask}
        />
      ));
      return list;
    }
    const list = Object.keys(this.state.tasks)
      .filter(
        key => this.state.tasks[key].status === this.state.visibilityFilter
      )
      .map(key => (
        <Task
          key={key}
          index={key}
          details={this.state.tasks[key]}
          deleteTask={this.deleteTask}
          completeTask={this.completeTask}
          updateTask={this.updateTask}
        />
      ));
    return list;
  };

  showCompletedTasks = () => {
    this.setState({ visibilityFilter: "finished" });
  };

  showUnfinishedTasks = () => {
    this.setState({ visibilityFilter: "unfinished" });
  };

  showAllTasks = () => {
    this.setState({ visibilityFilter: "all" });
  };

  render() {
    let taskList = this.generateList();
    return (
      <div className="container">
        <Header
          title={"Todo List React App"}
          tasks={this.state.tasks}
          addTask={this.addTask}
        />
        <div className="col-md-6 mx-auto p-0">
          <div className="btn-group col-md-12 p-0" role="group">
            <CompletedTasksBtn showCompletedTasks={this.showCompletedTasks} />
            <UnfinishedTasksBtn
              showUnfinishedTasks={this.showUnfinishedTasks}
            />
            <ShowAllTasksBtn showAllTasks={this.showAllTasks} />
          </div>
        </div>
        <div className="col-md-6 p-0 mx-auto mt-5">
          <span>
            Showing:{" "}
            {this.state.visibilityFilter.charAt(0).toUpperCase() +
              this.state.visibilityFilter.substring(1) +
              " " +
              "Tasks"}
          </span>
          <div className="col-md-12 p-0 mx-auto">{taskList}</div>
        </div>
      </div>
    );
  }
}

export default App;
