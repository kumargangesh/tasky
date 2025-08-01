import React, { useContext } from 'react'
import taskContext from '../Context/TaskContext';

export default function Home() {

    const context = useContext(taskContext);
    const { name } = context;

  return (
    <div>
      <center><h1>Name: {name}</h1></center>
    </div>
  )
}
