import React from "react";
import { TaskType } from "../models/Task";
import "./TasksList.css";
import { Task } from "./Task";

type TaskListProps = {
  tasks: TaskType[];
};

export const TasksList = ({ tasks }: TaskListProps) => {
  return (
    <div className="list-container">
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};
