import React, { useEffect } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { TaskFormModal } from "./components/TaskFormModal";
import { data } from "./data/tasks";
import {Header} from "./components/Header";
import {TasksList} from "./components/TaskList";
import { useState } from "react";
import { TaskType } from "./models/Task";


const App = () => {
  const title = "To do list";
  /* const tasks = data; */
  const [taskToEdit, setTaskToEdit]= useState<TaskType | null >(null);


  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>(data);


  const updateTaskState = (taskId: number) => {
    console.error("I need to be implemented");
  };

  const addOrEditTask = (event: any, taskToEditId?: number) => {
    event.preventDefault();

    if(taskToEditId!=null){ 
      const tmpTask= tasks.find(task => task.id === taskToEditId);
      if(tmpTask){
        tmpTask.title = event.target.title.value;
        tmpTask.description = event.target.description.value;
      } 
      setTaskToEdit(null);

    }else{
      
      let formData=  new FormData(event.target);
      let Data = Object.fromEntries(formData);
      
      console.log(Data);
      console.log(tasks);
      
      const AllData ={
        
        id: tasks[tasks.length-1].id+1,
        title: Data.title.toString(),
        description: Data.description.toString(),
        done: false,
      }
      
      setTaskToEdit(null);
      tasks.push(AllData); 
    }
    setShow(false); 
  };



  const editTask = (taskId: number) => {
    console.error("I need to be implemented");
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      setTaskToEdit(task);
      setShow(true);
    }
    console.log(task);
  };

    
  

  const deleteTask = (taskId: number) => {
    /* let copyTask = tasks;
    copyTask.splice(taskId,1);
    setTasks(copyTask); */
    setTasks(tasks.filter(task => task.id !== taskId))
    
    
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
