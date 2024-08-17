import React from "react";

const TaskItem = ({ task, handleDelete, toggleCompletion }) => {
  const handleToggle = () => {
    toggleCompletion(task.id);
  };

  return (
    <div className="taskItem">
      <div className="check-p">
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={task.completed}
        />
        <p className={task.completed ? "line-through" : ""}>{task.text}</p>
      </div>
      <button onClick={() => handleDelete(task.id)}>delete</button>
    </div>
  );
};

export default TaskItem;
