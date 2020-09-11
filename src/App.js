import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Home from './components/pages/Home'
import Lecture from './components/pages/Lecture'
import PastQuestion from './components/pages/Past-Question';
import CBT from './components/pages/Cbt';
import Welcome from './components/pages/Cbtwelcome';
import Connect from './components/pages/Connect';
import NavBar from './components/navbar/Navbar';
import Result from './components/pages/Result';
import Footer from './components/navbar/Footer';
function App() {
  return (

    <>
      <NavBar />
      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/lecture' component={Lecture} />
        <Route path='/pastquestion' component={PastQuestion} />
        <Route path='/cbt' component={CBT} />
        <Route path='/connect' component={Connect} />
        <Route path='/cbtwelcome' component={Welcome} />
        <Route path='/cbtresult' component={Result} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
