import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import HeaderImg from "./components/HeaderImg";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";

const rootElement = document.getElementById("root");
ReactDOM.render(
<div>
<Sidebar />
<HeaderImg />
<About />
<Skills />
</div>,
rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
