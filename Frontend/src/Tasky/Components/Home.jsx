import React, { useContext, useState, useEffect, useRef } from 'react'
import taskContext from '../Context/TaskContext';
import IndividualTask from './Tasks/IndividualTask';
import "../Style.css";
import { Link } from 'react-router-dom';

export default function Home() {

  const context = useContext(taskContext);
  const { notes, fetchAllNotes, addNote, updateNote, setAlertMessage, toggleToShow, userAuth, impTasks } = context;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("COMMON");
  const [duedate, setDueDate] = useState("");
  const [assign, setAssign] = useState("");
  const [errorMessage, changeErrorMessage] = useState("");

  const [etitle, esetTitle] = useState("");
  const [edesc, esetDesc] = useState("");
  const [estatus, esetStatus] = useState("");
  const [epriority, esetPriority] = useState("COMMON");
  const [eduedate, esetDueDate] = useState("");
  const [eassign, esetAssign] = useState("");
  const [eerrorMessage, changeeErrorMessage] = useState("");

  const [noteToUpdate, changeNoteToUpdate] = useState("");

  const [previousCommon, setPreviousCommon] = useState(0);
  const [nextCommon, setNextCommon] = useState(6);

  const [previousImp, setPreviousImp] = useState(0);
  const [nextImp, setNextImp] = useState(6);

  const handlePreviousCommon = () => {
    if (previousCommon >= 0) {
      setPreviousCommon(previousCommon, - 6);
      setNextCommon(nextCommon, - 6);
      // alert(previous);
    }
  }

  const handleNextCommon = () => {
    if (nextCommon >= 6 && nextCommon < notes.length) {
      setPreviousCommon(previousCommon + 6);
      setNextCommon(nextCommon + 6);
      // alert(next);
    }
  }

  const handlePreviousImp = () => {
    if (previousImp >= 0) {
      setPreviousImp(previousImp, - 6);
      setNextImp(nextImp, - 6);
      // alert(previous);
    }
  }

  const handleNextImp = () => {
    if (nextImp >= 6 && nextImp < impTasks.length) {
      setPreviousImp(previousImp + 6);
      setNextImp(nextImp + 6);
      // alert(next);
    }
  }

  const handleStatus = (event) => {
    let gettingStatus = event.target.textContent;
    gettingStatus = gettingStatus.toLowerCase();
    setStatus(gettingStatus);
    // alert(role);
  }

  const ehandleStatus = (event) => {
    let gettingStatus = event.target.textContent;
    gettingStatus = gettingStatus.toLowerCase();
    esetStatus(gettingStatus);
  }

  useEffect(() => {
    fetchAllNotes();
    // loadChangedPages();
    // if (userAuth === "")
    //   toggleIsUser(false);
    // else
    //   toggleIsUser(true);
  });

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDesc = (e) => {
    setDesc(e.target.value)
  }

  // const handleStatus = (e) => {
  //   setStatus(e.target.value)
  // }

  const handlePriority = () => {
    if (priority === "COMMON")
      setPriority('IMPORTANT');
    else
      setPriority("COMMON");
  }

  const handleDueDate = (e) => {
    setDueDate(e.target.value)
  }

  const handleAssign = (e) => {
    setAssign(e.target.value)
  }

  const ehandleTitle = (e) => {
    esetTitle(e.target.value)
  }

  const ehandleDesc = (e) => {
    esetDesc(e.target.value)
  }

  const ehandlePriority = (e) => {
    if (epriority === "COMMON")
      esetPriority('IMPORTANT');
    else
      esetPriority("COMMON");
  }

  const ehandleDueDate = (e) => {
    esetDueDate(e.target.value)
  }

  const ehandleAssign = (e) => {
    esetAssign(e.target.value)
  }

  const validateTask = () => {
    if (title === "" && desc === "" && status === "" && priority === "" && duedate === "" && assign === "") {
      changeErrorMessage("enter all values");
      return false;
    }
    else if (title === "") {
      changeErrorMessage("enter title");
      return false;
    }
    else if (desc === "") {
      changeErrorMessage("enter description");
      return false;
    }
    else if (status === "") {
      changeErrorMessage("enter status");
      return false;
    }
    else if (priority === "") {
      changeErrorMessage("enter priority");
      return false;
    }
    else if (duedate === "") {
      changeErrorMessage("enter duedate");
      return false;
    }
    else if (assign === "") {
      changeErrorMessage("enter assigned to");
      return false;
    } else {
      changeErrorMessage("");
      return true;
    }
  }

  const clearAll = () => {
    setTitle("");
    setDesc("");
    setStatus("");
    setPriority("COMMON");
    setAssign("");
    setDueDate("");
  }

  const clearEAll = () => {
    esetTitle("");
    esetDesc("");
    esetStatus("");
    esetAssign("");
    esetDueDate("");
    esetPriority("COMMON");
  }

  const addTask = () => {
    // console.log(title, desc, status, priority, duedate, assign);
    if (validateTask()) {
      addNote(title, desc, status, priority, duedate, assign);
      toggleToShow(true);
      setAlertMessage("New Task added successfully");
      setTimeout(() => {
        toggleToShow(false);
        setAlertMessage("");
        clearAll();
      }, 1500);
    }
  }

  const updateNNote = (note) => {
    ref.current.click();
    esetTitle(note.title);
    esetDesc(note.description);
    esetStatus(note.status);
    esetPriority(note.priority);
    esetAssign(note.assignedto);
    changeNoteToUpdate(note);
  }

  const confirmUpdate = () => {

    changeeErrorMessage("");
    updateNote(noteToUpdate._id, etitle, edesc, estatus, epriority, eassign);
    toggleToShow(true);
    setAlertMessage("Note updated successfully");
    setTimeout(() => {
      toggleToShow(false);
      setAlertMessage("");
      clearEAll();
    }, 1500);
    refClose.current.click();
  }

  const ref = useRef(null);
  const refClose = useRef(null);

  return (

    <div>
      {
        userAuth === "" ?
          <div>
            <center><h1 style={{
              marginTop: "5%"
            }}>No user logged in, please either login in sign up</h1></center>
            <Link to="/"><button className="btn btn-secondary" style={{
              width: "15%",
              height: "60px",
              marginLeft: "40%",
              marginTop: "5%"
            }}>LOGIN / SIGNUP</button></Link>
          </div>
          :
          <>
            <div>
              <div className="container" style={{
                fontWeight: "bolder"
              }}>

                <h3>Add new Task</h3>

                {/* <div className="newtask d-flex justify-content-between" style={{
                  border : "1px solid black"
                }}>
                  <center><h3>Add new task</h3></center>
                </div> */}

                <div style={{
                  margin: 'auto',
                  marginTop: '3%',
                  width: '80%',
                  border: "1px solid black",
                  padding: "2%"
                }}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={handleTitle} placeholder='title' style={{
                      // fontWeight: "bold"
                    }} />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <textarea type="text" class="form-control" id="exampleInputPassword1" value={desc} onChange={handleDesc} style={{
                      height: "100px",
                      // fontWeight: "bold"
                    }} placeholder='description' />
                  </div>

                  <div className="stapri d-flex justify-content-between">
                    <div class="mb-3" style={{
                      width: "45%",
                      // border : "1px solid black"
                    }} >
                      <label for="exampleInputPassword1" class="form-label">Status</label>
                      {/* <input type="text" class="form-control" id="exampleInputPassword1" value={status} onChange={handleStatus} /> */}
                      <div className="buttons d-flex justify-content-between" style={{
                        // border : "1px solid black",
                        width: "70%",
                        padding: ".5%"
                      }}>
                        <button className="btn btn-warning" style={{
                          width: "40%",
                          height: "50px"
                        }} onClick={handleStatus}>PENDING</button>
                        <button className="btn btn-success" style={{
                          width: "40%",
                          height: "50px"
                        }} onClick={handleStatus}>COMPLETED</button>
                      </div>
                    </div>

                    <div class="mb-3" style={{
                      width: "45%",
                      // border : "1px solid black"
                    }} >
                      <label for="exampleInputPassword1" class="form-label">Priority</label>
                      <br />
                      <button className="btn btn-success" style={{
                        // backgroundColor: "white",
                        width: "30%",
                        height: "50px",
                        // color: "black"
                      }} onClick={handlePriority}>{priority}</button>
                      {/* <input type="text" class="form-control" id="exampleInputPassword1" value={priority} onChange={handlePriority} /> */}
                    </div>
                  </div>

                  <div className="ddassi d-flex justify-content-between">
                    <div class="mb-3" style={{
                      width: "20%",
                      // border : "1px solid black"
                    }}>
                      <label for="exampleInputPassword1" class="form-label">Due Date</label>
                      <input type="date" class="form-control" id="exampleInputPassword1" value={duedate} onChange={handleDueDate} />
                    </div>

                    <div class="mb-3" style={{
                      width: "45%",
                      // border : "1px solid black"
                    }}>
                      <label for="exampleInputPassword1" class="form-label">Assigned To</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" value={assign} onChange={handleAssign} placeholder='assigned to' />
                    </div>
                  </div>

                  <p style={{
                    color: 'red',
                    fontWeight: "bolder"
                  }}>{errorMessage}</p >

                  <button type="submit" class="btn btn-warning" onClick={addTask} style={{
                    width: "100px",
                    height: "50px"
                  }}>Add Task</button>
                </div>

                {/* <!-- Button trigger modal --> */}
                <button style={{
                  display: "none"
                }} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Updating a note</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>

                      <div className="modal-body">
                        <div className="newNoteForm">
                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              value={etitle}
                              onChange={ehandleTitle}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                            <textarea
                              type="text"
                              className="form-control"
                              id="exampleInputPassword1"
                              value={edesc}
                              onChange={ehandleDesc}
                              style={{
                                height: "150px"
                              }}
                            />
                          </div>

                          <div className="mb-3">
                            {/* <label htmlFor="exampleInputEmail1" className="form-label">Status</label> */}

                            <div class="mb-3" style={{
                              width: "70%",
                              // border : "1px solid black"
                            }} >
                              <label for="exampleInputPassword1" class="form-label">Status</label>
                              {/* <input type="text" class="form-control" id="exampleInputPassword1" value={status} onChange={handleStatus} /> */}
                              <div className="buttons d-flex justify-content-between" style={{
                                // border : "1px solid black",
                                width: "90%",
                                padding: ".5%"
                              }}>
                                <button className="btn btn-warning" style={{
                                  width: "40%",
                                  height: "50px"
                                }} onClick={ehandleStatus}>PENDING</button>
                                <button className="btn btn-success" style={{
                                  width: "40%",
                                  height: "50px"
                                }} onClick={ehandleStatus}>COMPLETED</button>
                              </div>
                            </div>

                            {/* <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              value={estatus}
                              onChange={ehandleStatus}
                            /> */}
                          </div>

                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Priority</label>
                            <br />
                            <button className="btn btn-success" style={{
                              // backgroundColor: "white",
                              width: "30%",
                              height: "50px",
                              // color: "black"
                            }} onClick={ehandlePriority}>{epriority}</button>
                            {/* <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              value={epriority}
                              onChange={ehandlePriority}
                            /> */}
                          </div>

                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Due Date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              value={eduedate}
                              onChange={ehandleDueDate}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Assigned To</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              value={eassign}
                              onChange={ehandleAssign}
                            />
                          </div>

                        </div>
                      </div>

                      <p style={{
                        color: 'red',
                        fontWeight: "bolder",
                        marginLeft: "5%",
                        marginTop: "-3%"
                      }}>{eerrorMessage}</p>

                      <div className="modal-footer">
                        <button ref={refClose} type="button" className="btn btn-secondary loginButton" data-bs-dismiss="modal" >Close</button>
                        <button type="button" className="btn btn-warning loginButton" onClick={confirmUpdate} >Update Note</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container" style={{
                  marginTop: "3%"
                }}>
                  <u><h2 style={{
                    marginTop: "3%",
                    marginBottom: "3%"
                  }}>Priority Tasks: </h2></u>
                  <div className="row">
                    {
                      impTasks.length > 0 ?
                        impTasks.slice(previousImp, nextImp).map((task) => {
                          return (
                            <div className="col-md-4">
                              <IndividualTask task={task} updateNote={updateNNote} />
                            </div>
                          )
                        })
                        :
                        <h5>No tasks available</h5>
                    }
                  </div>

                  <div>
                    {

                      impTasks.length > 3 ?
                        <div className='d-flex justify-content-between' style={{
                          // border : "1px solid black",
                          padding: "1%",
                          width: "60%",
                          margin: "1% auto"
                        }}>
                          <button className="btn btn-success" onClick={handlePreviousImp} style={{
                            width: "20%",
                            height: "60px"
                          }}>PREVIOUS</button>
                          <button className="btn btn-success" onClick={handleNextImp} style={{
                            width: "20%",
                            height: "60px"
                          }}>NEXT</button>
                        </div>
                        :
                        <></>
                    }
                  </div>

                </div>



                <div className="container" style={{
                  marginTop: "3%"
                }}>
                  <u><h2 style={{
                    marginTop: "3%",
                    marginBottom: "3%"
                  }}>Available Tasks: </h2></u>
                  <div className="row">
                    {
                      notes.length > 0 ?
                        notes.slice(previousCommon, nextCommon).map((task) => {
                          return (
                            <div className="col-md-4">
                              <IndividualTask task={task} updateNote={updateNNote} />
                            </div>
                          )
                        })
                        :
                        <h5>No tasks available</h5>
                    }
                  </div>
                </div>

                <div>
                  {

                    notes.length > 3 ?
                      <div className='d-flex justify-content-between' style={{
                        // border : "1px solid black",
                        padding: "1%",
                        width: "60%",
                        margin: "1% auto"
                      }}>
                        <button className="btn btn-success" onClick={handlePreviousCommon} style={{
                          width: "20%",
                          height: "60px"
                        }}>PREVIOUS</button>
                        <button className="btn btn-success" onClick={handleNextCommon} style={{
                          width: "20%",
                          height: "60px"
                        }}>NEXT</button>
                      </div>
                      :
                      <></>
                  }
                </div>


              </div>
            </div>
          </>
      }
    </div>

    // <div>

    //   <div className="container" style={{
    //     fontWeight : "bolder"
    //   }}>
    //     <div className="newtask d-flex justify-content-between">
    //       <h3>Add new task</h3>
    //       <i classsName="fa-solid fa-plus" />
    //     </div>

    //     <div style={{
    //       margin: 'auto',
    //       marginTop: '3%',
    //       width: '80%',
    //       border: "1px solid black",
    //       padding: "2%"
    //     }}>
    //       <div class="mb-3">
    //         <label for="exampleInputEmail1" class="form-label">Title</label>
    //         <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={handleTitle} />
    //       </div>
    //       <div class="mb-3">
    //         <label for="exampleInputPassword1" class="form-label">Description</label>
    //         <input type="text" class="form-control" id="exampleInputPassword1" value={desc} onChange={handleDesc} />
    //       </div>

    //       <div className="stapri d-flex justify-content-between">
    //         <div class="mb-3"  style={{
    //             width : "45%",
    //             // border : "1px solid black"
    //           }} >
    //           <label for="exampleInputPassword1" class="form-label">Status</label>
    //           <input type="text" class="form-control" id="exampleInputPassword1" value={status} onChange={handleStatus}/>
    //         </div>

    //         <div class="mb-3"  style={{
    //             width : "45%",
    //             // border : "1px solid black"
    //           }} >
    //           <label for="exampleInputPassword1" class="form-label">Priority</label>
    //           <input type="text" class="form-control" id="exampleInputPassword1" value={priority} onChange={handlePriority} />
    //         </div>
    //       </div>

    //       <div className="ddassi d-flex justify-content-between">
    //         <div class="mb-3"  style={{
    //             width : "20%",
    //             // border : "1px solid black"
    //           }}>
    //           <label for="exampleInputPassword1" class="form-label">Due Date</label>
    //           <input type="date" class="form-control" id="exampleInputPassword1" value={duedate} onChange={handleDueDate} />
    //         </div>

    //         <div class="mb-3"  style={{
    //             width : "45%",
    //             // border : "1px solid black"
    //           }}>
    //           <label for="exampleInputPassword1" class="form-label">Assigned To</label>
    //           <input type="text" class="form-control" id="exampleInputPassword1" value={assign} onChange={handleAssign} />
    //         </div>
    //       </div>

    //       <p style={{
    //         color: 'red',
    //         fontWeight: "bolder"
    //       }}>{errorMessage}</p >

    //       <button type="submit" class="btn btn-warning" onClick={addTask} style={{
    //         width : "100px",
    //         height : "50px"
    //       }}>Add Task</button>
    //     </div>

    //     {/* <!-- Button trigger modal --> */}
    //     <button style={{
    //       display: "none"
    //     }} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    //       Launch demo modal
    //     </button>

    //     {/* <!-- Modal --> */}
    //     <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //       <div className="modal-dialog">
    //         <div className="modal-content">
    //           <div className="modal-header">
    //             <h1 className="modal-title fs-5" id="exampleModalLabel">Updating a note</h1>
    //             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //           </div>

    //           <div className="modal-body">
    //             <div className="newNoteForm">
    //               <div className="mb-3">
    //                 <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    //                 <input
    //                   type="email"
    //                   className="form-control"
    //                   id="exampleInputEmail1"
    //                   aria-describedby="emailHelp"
    //                   value={etitle}
    //                   onChange={ehandleTitle}
    //                 />
    //               </div>

    //               <div className="mb-3">
    //                 <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    //                 <textarea
    //                   type="text"
    //                   className="form-control"
    //                   id="exampleInputPassword1"
    //                   value={edesc}
    //                   onChange={ehandleDesc}
    //                   style={{
    //                     height: "150px"
    //                   }}
    //                 />
    //               </div>

    //               <div className="mb-3">
    //                 <label htmlFor="exampleInputEmail1" className="form-label">Status</label>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   id="exampleInputEmail1"
    //                   aria-describedby="emailHelp"
    //                   value={estatus}
    //                   onChange={ehandleStatus}
    //                 />
    //               </div>

    //               <div className="mb-3">
    //                 <label htmlFor="exampleInputEmail1" className="form-label">Priority</label>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   id="exampleInputEmail1"
    //                   aria-describedby="emailHelp"
    //                   value={epriority}
    //                   onChange={ehandlePriority}
    //                 />
    //               </div>

    //               <div className="mb-3">
    //                 <label htmlFor="exampleInputEmail1" className="form-label">Due Date</label>
    //                 <input
    //                   type="date"
    //                   className="form-control"
    //                   id="exampleInputEmail1"
    //                   aria-describedby="emailHelp"
    //                   value={eduedate}
    //                   onChange={ehandleDueDate}
    //                 />
    //               </div>

    //               <div className="mb-3">
    //                 <label htmlFor="exampleInputEmail1" className="form-label">Assigned To</label>
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   id="exampleInputEmail1"
    //                   aria-describedby="emailHelp"
    //                   value={eassign}
    //                   onChange={ehandleAssign}
    //                 />
    //               </div>

    //             </div>
    //           </div>

    //           <p style={{
    //             color: 'red',
    //             fontWeight: "bolder",
    //             marginLeft: "5%",
    //             marginTop: "-3%"
    //           }}>{eerrorMessage}</p>

    //           <div className="modal-footer">
    //             <button ref={refClose} type="button" className="btn btn-secondary loginButton" data-bs-dismiss="modal" >Close</button>
    //             <button type="button" className="btn btn-warning loginButton" onClick={confirmUpdate} >Update Note</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>


    //   </div>

    // <div className="container" style={{
    //   marginTop: "3%"
    // }}>
    //   <h4>Available Tasks: </h4>
    //   <div className="row">
    //     {
    //       notes.length > 0 ?
    //         notes.map((task) => {
    //           return (
    //             <div className="col-md-4">
    //               <IndividualTask task={task} updateNote={updateNNote} />
    //             </div>
    //           )
    //         })
    //         :
    //         <h5>No tasks available</h5>
    //     }
    //   </div>
    // </div>
    // </div>
  )
}
