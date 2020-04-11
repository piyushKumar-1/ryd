import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import TableView from './components/TableView.js';
import KotView from './components/KotView.js';
import CoinsStatus from './components/CoinsStatus.js';
const Home = () => (

  <div className="text-center"><br/><br/>
  <h1>Click The views you want to see </h1>
  </div>
);




const Navi = () => (
      <div>
        <Navbar className="h" bg="dark" expand="lg" variant="dark">
        <div className="ali">

          <div className="row">
            <a href="/table" id="table" className="bo btn-primary col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/table">Table View</Nav.Link>
              </Nav>    
            </a>    
            <a href="/kot" className="bo btn-primary col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/kot">Kot View</Nav.Link>
              </Nav>    
            </a>    
            <a href="/coins" className="bo btn-primary col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/coins">Coins Status</Nav.Link>
              </Nav>
            </a>
          </div>
          </div>
        </Navbar>
      </div> 

);

class App extends React.Component {



  render() {
    return (
          <div>
            <Navi/>
             <BrowserRouter>
              <div>
                <Switch>
                 <Route path="/" component={Home} exact/>
                 <Route path="/table" component={TableView} exact/>
                 <Route path="/kot" component={KotView} exact/>
                 <Route path="/coins" component={CoinsStatus} exact/>
                </Switch>
              </div> 
            </BrowserRouter>
          </div>
    );
  }
}

export default App;
