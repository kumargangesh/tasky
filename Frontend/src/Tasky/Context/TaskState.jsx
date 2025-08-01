import { useState } from "react";
import TaskContext from "./TaskContext";

const TaskState = (props) => {

  const [name, setName] = useState("gangesh");

  return (
    <TaskContext.Provider value={{ name }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;
