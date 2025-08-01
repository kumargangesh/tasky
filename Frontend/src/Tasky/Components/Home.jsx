import React, { useContext, useState } from 'react'
import taskContext from '../Context/TaskContext';
import IndividualTask from './Tasks/IndividualTask';
import "../Style.css";

export default function Home() {

  // notes, addNote, updateNote, deleteNote, fetchAllNotes, alertMessage, setAlertMessage, toShow, toggleToShow, userAuth, setUserAuth, userEmail, setUserEmail

  const context = useContext(taskContext);
  const { notes, addNewTask } = context;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [duedate, setDueDate] = useState("");
  const [assign, setAssign] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDesc = (e) => {
    setDesc(e.target.value)
  }

  const handleStatus = (e) => {
    setStatus(e.target.value)
  }

  const handlePriority = (e) => {
    setPriority(e.target.value)
  }

  const handleDueDate = (e) => {
    setDueDate(e.target.value)
  }

  const handleAssign = (e) => {
    setAssign(e.target.value)
  }

  const addTask =() => {
    console.log(title, desc, status, priority, duedate, assign);
    addNewTask(title, desc, status, priority, duedate, assign);
  }

  return (
    <div>

      <div className="container">
        <div className="newtask d-flex justify-content-between">
          <h3>Add new task</h3>
          <i classsName="fa-solid fa-plus" />
        </div>

        <div style={{
          margin : 'auto',
          marginTop : '3%',
          width : '80%'
        }}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={handleTitle} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Description</label>
            <input type="text" class="form-control" id="exampleInputPassword1" value={desc} onChange={handleDesc} />
          </div>

          <div className="stapri d-flex justify-content-between">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Status</label>
              <input type="text" class="form-control" id="exampleInputPassword1" value={status} onChange={handleStatus} />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Priority</label>
              <input type="text" class="form-control" id="exampleInputPassword1" value={priority} onChange={handlePriority} />
            </div>
          </div>

          <div className="ddassi d-flex justify-content-between">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Due Date</label>
              <input type="date" class="form-control" id="exampleInputPassword1" value={duedate} onChange={handleDueDate} />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Assigned To</label>
              <input type="text" class="form-control" id="exampleInputPassword1" value={assign} onChange={handleAssign} />
            </div>
          </div>

          <button type="submit" class="btn btn-primary" onClick={addTask}>Add Task</button>
        </div>

        {/* <div className="newform">
          <div>
            <div classsName="mb-3">
              <label for="exampleInputEmail1" classsName="form-label">Title</label>
              <input type="text" classsName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={handleTitle} />
            </div>

            <div classsName="mb-3">
              <label for="exampleInputPassword1" classsName="form-label">Description</label>
              <input type="text" classsName="form-control" id="exampleInputPassword1" value={desc} onChange={handleDesc} />
            </div>

            <div classsName="mb-3">
              <label for="exampleInputPassword1" classsName="form-label">Status</label>
              <input type="text" classsName="form-control" id="exampleInputPassword1" value={status} onChange={handleStatus} />
            </div>

            <div classsName="mb-3">
              <label for="exampleInputPassword1" classsName="form-label">Priority</label>
              <input type="text" classsName="form-control" id="exampleInputPassword1" value={priority} onChange={handlePriority} />
            </div>

            <div classsName="mb-3">
              <label for="exampleInputPassword1" classsName="form-label">Assigned To</label>
              <input type="text" classsName="form-control" id="exampleInputPassword1" value={assign} onChange={handleAssign} />
            </div>

            <button type="submit" classsName="btn btn-primary">Submit</button>
          </div>
        </div> */}

      </div>

      <div className="container" style={{
        marginTop: "3%"
      }}>
        <h4>Available Tasks: </h4>
        <div className="row">
          {
            notes.length > 0 ?
              notes.map((task) => {
                return (
                  <div className="col-md-4">
                    <IndividualTask task={task} />
                  </div>
                )
              })
              :
              <h5>No tasks available</h5>
          }
        </div>
      </div>
    </div>
  )
}
