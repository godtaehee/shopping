import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavLink, Button} from "react-bootstrap";
import  {  Link, Route,  Switch } from "react-router-dom";
import Detail from "./Detail.js";
import {useState} from "react";
import data from "./data.js";

function App() {
  return (
    <div className="App">

        <Route path="/">
            <div>그냥 페이지</div>
        </Route>
        <Route path="/detail/">
            <Detail />
        </Route>
    </div>
  );
}

export default App;
