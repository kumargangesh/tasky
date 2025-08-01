import { useState } from "react";
import TaskContext from "./TaskContext";

function TaskState() {

    const about = {
        "name" : "gangesh kumar",
        "id" : 28
    };

  return (
    <TaskContext.Provider value={{
        about
    }}>
        { props.children }
    </TaskContext.Provider>
  )
}

export default TaskState;
