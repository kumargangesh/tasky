import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Login from './UserAuth/Login';
import Signup from './UserAuth/Signup';
import Navbar from './Navbar';

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element = { <Login /> } />
            <Route path='/signup' element = { <Signup /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
