
import { useState } from 'react';
import TaskContext from './TaskContext';

const TaskState = (props) => {

  // const host = "https://inotebook-backend-gx6p.onrender.com";
  const host = "localhost:5000";

  const tempNotes = [];

  const [notes, setNotes] = useState(tempNotes);
  const [alertMessage, setAlertMessage] = useState("");
  const [toShow, toggleToShow] = useState(false);
  const [userAuth, setUserAuth] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // fetching all the notes

  const fetchAllNotes = async () => {
    const response = await (fetch(`${host}/tasky/tasks/fetchalltasks`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token': userAuth
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3Mjg0ZGFmMjhhNjVjNmQ0MDY4ZjJmIn0sImlhdCI6MTc1Mjk1NzkwNH0.iwIKO1fRYxbk1h4BJ_NlxOr7V6dVaASFIfQ1cD-7pMg"
      },
      // body : JSON.stringify({title, description})
    }));

    const json = await response.json();
    const allNotes = json.notes;
    setNotes(allNotes);
  }

  // adding a new note

  const addNote = async (title, description) => {

    // Now we are going to make API calls 

    const response = await (fetch(`${host}/tasky/tasks/addtasks`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': userAuth
        // 'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3Mjg0ZGFmMjhhNjVjNmQ0MDY4ZjJmIn0sImlhdCI6MTc1MjMzNTU4OX0.jkgZHl2OdzQvPwjDmAM5iFQt87gd7Fqu5Rsdh-Wmirc"
      },
      body: JSON.stringify({ title, description })
    }));

    // setNotes(notes.concat(note));
  }

  // updating a notes

  const updateNote = async (id, title, description) => {

    // Now we are going to make API calls 

    const response = await (fetch(`${host}/tasky/tasks/updatetask/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': userAuth
        // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3Mjg0ZGFmMjhhNjVjNmQ0MDY4ZjJmIn0sImlhdCI6MTc1MjMzNTU4OX0.jkgZHl2OdzQvPwjDmAM5iFQt87gd7Fqu5Rsdh-Wmirc'
      },
      body: JSON.stringify({ title, description })
    }));


    // for(let g=0;g<notes.length;g++){
    //     if(notes[g]._id === id){
    //         notes[g].title = title;
    //         notes[g].description = description;
    //     }
    // }
  }

  // delete a note

  const deleteNote = async (id) => {

    const response = await (fetch(`${host}/tasky/tasks/updatetask/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': userAuth
        // 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3Mjg0ZGFmMjhhNjVjNmQ0MDY4ZjJmIn0sImlhdCI6MTc1Mjk1NzkwNH0.iwIKO1fRYxbk1h4BJ_NlxOr7V6dVaASFIfQ1cD-7pMg'
      }
    }));


    // alert("note to delete, with ID: "+id);

    const json = response.json();
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  return (
    <TaskContext.Provider value={{ notes, addNote, updateNote, deleteNote, fetchAllNotes, alertMessage, setAlertMessage, toShow, toggleToShow, userAuth, setUserAuth, userEmail, setUserEmail }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;



// import { useState } from "react";
// import TaskContext from "./TaskContext";

// const TaskState = (props) => {

//   const initialTasks = [
//     {
//       "title": "T1",
//       "description": "this is T1",
//       "status": "C",
//       "priority": "Y",
//       "duedate": "01-08-2025",
//       "assignedto": "Khushi"
//     },
//     {
//       "title": "T2",
//       "description": "this is T2",
//       "status": "C",
//       "priority": "Y",
//       "duedate": "01-08-2025",
//       "assignedto": "Gangesh"
//     },
//     {
//       "title": "T3",
//       "description": "this is T3",
//       "status": "C",
//       "priority": "Y",
//       "duedate": "01-08-2025",
//       "assignedto": "Khushi"
//     },
//     {
//       "title": "T4",
//       "description": "this is T4",
//       "status": "C",
//       "priority": "Y",
//       "duedate": "01-08-2025",
//       "assignedto": "Khushi"
//     }
//   ];

//   const [tasks, setTasks] = useState(initialTasks);

//   const addNewTask = async (title, description, status, priority, duedtae, assignedto) => {
//     const newTask = {
//       "title": title,
//       "description": description,
//       "status": status,
//       "priority": priority,
//       "duedate": duedtae,
//       "assignedto": assignedto
//     };

//     setTasks(tasks.concat(newTask));
//     console.log(tasks);
//   }

//   return (
//     <TaskContext.Provider value={{ tasks, addNewTask }}>
//       {props.children}
//     </TaskContext.Provider>
//   )
// }

// export default TaskState;
