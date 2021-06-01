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
<<<<<<< HEAD

        <Route path="/">
            <div>그냥 페이지</div>
        </Route>
        <Route path="/detail/">
            <Detail />
        </Route>
=======
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Jumbotron className="bg">
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>

        <div className="container">
            <div className="row">
                {
                    shoose.map(function (val, idx){
                        return <List props={shoose[idx]}></List>
                    })
                }
            </div>
        </div>


>>>>>>> main
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
