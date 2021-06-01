import './App.css';
import { Navbar, Nav, NavLink, Button} from "react-bootstrap";
import  {  Link, Route,  Switch } from "react-router-dom";
import Detail from "./Detail.js";
import {useState} from "react";
import data from "./data.js";

function App() {

    const [shoose, shooseFunc] = useState(data);

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

function List(props) {

    console.log(props);

    return (
        <div className="col-md-4">
            <img src={props.props.src} width="100%" />
            <h4>{props.props.title}</h4>
            <p>{props.props.content}</p>
        </div>
    )
}

export default App;
