import React from 'react'
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';





var createreactclass = require('create-react-class')







const KotNav = () => (
      <div>
        <Navbar className="h" bg="dark" expand="lg" variant="dark">
        <div className="ali">

          <div className="row">
            <a href="/kot" className="bo btn-dark col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/kot">Kot View</Nav.Link>
              </Nav>    
            </a>    
            <a href="/kot/inprogress" className="bo btn-dark col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/kot/inprogress">In Progress</Nav.Link>
              </Nav>    
            </a>    
            <a href="/kot/completed" className="bo btn-dark col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/kot/completed">Completed</Nav.Link>
              </Nav>
            </a>           
            <a href="/kot/cancelled" className="bo btn-dark col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/kot/cancelled">Cancelled</Nav.Link>
              </Nav>
            </a>
          </div>
          </div>
        </Navbar>
      </div> 

);




var Hello = createreactclass({
    render: function() {
        
        var names = ['Jake', 'Jon', 'Thruster', 'Piyush', 'Jhony', 'Bahubali', 'Kattapa', 'Mogali', 'Bhallaldev'];
        var cardlist = names.map(function(name){


          return (<div className="col-sm-4 pt-3">    
                      
                                    <div className="card w-33">
                          <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

                          <div className="card-body">
                          <h4>{name}</h4>
                            <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                          </div>
                        </div>
                      </div>                      
                      );
                    })
        return  <div className="row">{ cardlist }</div>
    }
});






export default class CardView extends React.Component {
	render() {
    return (
        <div>
        	<KotNav/>
        	<div className="container pt-3">
	            <Hello/>
	        </div>
        </div>
    );
  }
}