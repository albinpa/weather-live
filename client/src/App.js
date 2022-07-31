import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <Routes>
        {user && <Route exact path='/' element={<Home />} />}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' exact element={<Navigate replace to="/login" />} />

      </Routes>
    </div>
  );
}

export default App;
