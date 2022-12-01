import React, { FunctionComponent } from 'react';
import style from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import Register from './components/User/Register';
import Home from './components/Home';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/Notfound';
import Login from './components/User/Login';
import CreateProperty from './components/CreateProperty';

const App: FunctionComponent = () => {
  return (
    <div className={style.app}>
      <React.Fragment>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
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
