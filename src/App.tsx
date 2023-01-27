import React from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import {Header} from "./components/Header";
import {TasksList} from "./components/TaskList";
import { useState } from "react";


const App = () => {
  const title = "To do list";
  /* const tasks = data; */
  const taskToEdit: any = null;
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState(data);

  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {

    tasks.push(event);
    setShow(false);

  };

  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const deleteTask = (taskId: number) => {
    /* let copyTask = tasks;
    copyTask.splice(taskId,1);
    setTasks(copyTask); */
    setTasks((prev) => prev.filter((task) => task.id !== taskId))
  };

  

  return (
    <div className="main">
      <Header title={title}/>
      
  {/*     <div className="header">
        <h1>{title}</h1>
      </div> */}

    {/*   {
        tasks.map((task) => (
          <Task task={task}/>
        ))} */}

      <TasksList deleteTask={deleteTask} editTask={editTask} tasks={tasks} />
      

      <button
        className="add-task-btn"
        onClick={() => setShow(true)}
      >
        +
      </button>
      <TaskFormModal
        show={show}
        handleClose={ () => setShow(false)}

        addOrEditTask={addOrEditTask}
        initialValues={
          taskToEdit != null
            ? {
                id: taskToEdit.id,
                title: taskToEdit.title,
                description: taskToEdit.description,
              }
            : undefined
        }
      />
    </div>
  );
};

export default App;
