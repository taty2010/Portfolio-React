import React from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

//Components
import HeaderImg from "./components/Home/HeaderImg";
import Sidebar from "./NavComponents/Sidebar";
// import About from "./components/About";
 import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import NavChanges from "./NavComponents/NavChanges";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Route exact path="/" component={HeaderImg}/>
      <Route exact path="/skills" component={Skills}/>
      <Route exact path="/projects" component={Projects}/>
      <Route path='/contact' component={Footer}/>
    </div>
  );
}

export default App;
