import React from "react";

const CompletedTasksBtn = props => (
  <button
    className="btn btn-sm mt-1 ml-1 btn-primary"
    onClick={() => props.showCompletedTasks()}
  >
    Show Completed Tasks
  </button>
);

const UnfinishedTasksBtn = props => (
  <button
    className="btn btn-sm  mt-1 ml-1 btn-danger"
    onClick={() => props.showUnfinishedTasks()}
  >
    Show Unfinished Tasks
  </button>
);

const ShowAllTasksBtn = props => (
  <button
    className="btn btn-sm mt-1 ml-1 btn-dark"
    onClick={() => props.showAllTasks()}
  >
    Show All Tasks
  </button>
);

export { CompletedTasksBtn, UnfinishedTasksBtn, ShowAllTasksBtn };
