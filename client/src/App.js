import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NotFound from './components/Notfound';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route exact path='/' element={ <Home/>}/>
        <Route path='/users/register/' element={<Register />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
