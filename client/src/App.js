import React from 'react';
import style from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Register from './components/User/Register';
import Home from './components/Home';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/Notfound';
import Login from './components/User/Login';
import CreateProperty from './components/CreateProperty';
// import { LogProvider } from './context/logFormContext';

function App() {
  return (
    <div className={style.app}>
      <React.Fragment>
        {/* <LogProvider> */}
        <Navigation />
        {/* </LogProvider> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/property/create' element={<CreateProperty />} />
          <Route path='/users/register/' element={<Register />} />
          <Route path='/users/login/' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
