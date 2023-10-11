import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;
    onAdd(taskName);
    setTaskName("");
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
