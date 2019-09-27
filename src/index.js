import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import HeaderImg from "./components/HeaderImg";
import Sidebar from "./NavComponents/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import NavChanges from "./NavComponents/NavChanges";



const rootElement = document.getElementById("root");
ReactDOM.render(
<div>
<Sidebar />
<HeaderImg />
<About />
<Skills />
<Projects />
<Footer />
</div>,
rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
