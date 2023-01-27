import React from "react";
import { TaskType } from "../models/Task";
import "./TasksList.css";
import { Task } from "./Task";

type TaskListProps = {
  tasks: TaskType[];
  deleteTask: (taskId: number) => void;
  editTask: (taskId: number) => void;
};

export const TasksList = ({ tasks, deleteTask, editTask }: TaskListProps) => {
  return (
    <div className="list-container">
      {tasks.map((task) => (
        <Task task={task} key={task.id} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
};
