import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";

const TaskInput = ({ addTask }) => {
  const { task, setTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now() });
    setTask({
      text: "",
      completed: false,
      id: null,
    });
  };

  const handleChange = (e) => {
    setTask({ ...task, text: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>My Task Management App</h1>
      <input
        type="text"
        placeholder="Add Task"
        onChange={handleChange}
        value={task.text}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
