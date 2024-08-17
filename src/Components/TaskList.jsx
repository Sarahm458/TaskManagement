import { Component } from "react";
import React from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  state = {
    tasks: [],
  };

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };

  onDelete = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  toggleTaskCompletion = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  render() {
    return (
      <>
        <TaskInput addTask={this.addTask} />
        {this.state.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDelete={this.onDelete}
            toggleCompletion={this.toggleTaskCompletion}
          />
        ))}
      </>
    );
  }
}

export default TaskList;
