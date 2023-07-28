import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  //Add Task
  const addTask = (task) => {
    // generating random id
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    const newTask = tasks.filter((t) => t.id !== id);
    setTasks(newTask);
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    const newTask = tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task));
    setTasks(newTask);
    console.log(tasks);
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks Available"}
    </div>
  );
}

export default App;
