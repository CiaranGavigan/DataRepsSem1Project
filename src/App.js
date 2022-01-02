import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';

import { Read } from './components/read';
import { Create } from './components/create';
import { Edit } from './components/edit';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">


          <Navbar bg="dark" variant="dark">

            <Navbar.Brand href="#home">Game Start</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Check Inventory</Nav.Link>
              <Nav.Link href="/create">Add Inventory</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' exact> <Content></Content></Route> 
            <Route path='/create'><Create></Create></Route>
            <Route path='/read' component={Read}  />
            <Route path={'/edit/:id'} component={Edit} > </Route>
          </Switch>

        </div>
      </Router>
    );
  }
}


export default App;
