import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavLink, Button} from "react-bootstrap";
import  {  Link, Route,  Switch } from "react-router-dom";
import Detail from "./Detail.js";
import {useState} from "react";
import data from "."

function App() {
    const [shoose, shooseFunc] = useState()
  return (
    <div className="App">

        <Route path="/">
            <div>그냥 페이지</div>
        </Route>
        <Route path="/detail/:id">

                <Detail props={}/>

        </Route>
    </div>
  );
}

export default App;
