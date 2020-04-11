import React from 'react';


import { Navbar, Nav } from 'react-bootstrap';





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
            <a href="/kot/#" className="bo btn-dark col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/kot/#">In Progress</Nav.Link>
              </Nav>    
            </a>    
            <a href="/kot/#" className="bo btn-dark col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/kot/#">Completed</Nav.Link>
              </Nav>
            </a>           
            <a href="/kot/#" className="bo btn-dark col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/kot/#">Cancelled</Nav.Link>
              </Nav>
            </a>
          </div>
          </div>
        </Navbar>
      </div> 

);



class KotView extends React.Component {

	render() {
		return (
			<div>
				<KotNav/>
				<div className="container-fluid">
			        <form className="border form-inline s">
		                <input className="is" placeholder="Search" name="search" />
		                <div><i className="fa fa-search"></i></div>
		            </form>
		            <div className="row">


						<div className="card z col-md-3">
						    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

						    <div className="card-body">
						        <h5 className="card-title">Card title</h5>
						        <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
						    </div>
						    <ul className="list-group list-group-flush">
						        <li className="list-group-item">Cras justo odio</li>
						        <li className="list-group-item">Dapibus ac facilisis in</li>
						        <li className="list-group-item">Vestibulum at eros</li>
    				        </ul>
	    				    <div className="card-body">
		    				    <a href="#" className="card-link">Card link</a>
			    			    <a href="#" className="card-link">Another link</a>
				    		</div>
					   	</div>
					    <div className="card z col-md-3">
							<svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

						    <div className="card-body">
						        <h5 className="card-title">Card title</h5>
						        <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
						    </div>
						    <ul className="list-group list-group-flush">
						        <li className="list-group-item">Cras justo odio</li>
						        <li className="list-group-item">Dapibus ac facilisis in</li>
						        <li className="list-group-item">Vestibulum at eros</li>
    				        </ul>
	    				    <div className="card-body">
		    				    <a href="#" className="card-link">Card link</a>
			    			    <a href="#" className="card-link">Another link</a>
				    		</div>
						</div>
		            	<div className="card z col-md-3">
							<svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

						    <div className="card-body">
						        <h5 className="card-title">Card title</h5>
						        <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
						    </div>
						    <ul className="list-group list-group-flush">
						        <li className="list-group-item">Cras justo odio</li>
						        <li className="list-group-item">Dapibus ac facilisis in</li>
						        <li className="list-group-item">Vestibulum at eros</li>
    				        </ul>
	    				    <div className="card-body">
		    				    <a href="#" className="card-link">Card link</a>
			    			    <a href="#" className="card-link">Another link</a>
				    		</div>
						</div>
		            </div>
				</div>
			</div>	
		);
	}
}


export default KotView;