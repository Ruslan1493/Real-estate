import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/User/Register';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NotFound from './components/Notfound';
import Login from './components/User/Login';
// import { LogProvider } from './context/logFormContext';

function App() {
  return (
    <React.Fragment>
      {/* <LogProvider> */}
      <Navigation />
      {/* </LogProvider> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/users/register/' element={<Register />} />
        <Route path='/users/login/' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
