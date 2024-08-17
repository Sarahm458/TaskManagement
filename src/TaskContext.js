import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState({
    text: "",
    completed: false,
    id: null,
  });

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};
