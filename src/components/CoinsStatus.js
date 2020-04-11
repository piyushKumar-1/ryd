import React from 'react';
import '../App.css';

import { Navbar, Nav } from 'react-bootstrap';



const CoinNav = () => (
      <div>
        <Navbar className="h" bg="dark" expand="lg" variant="dark">
        <div className="ali">

          <div className="row">
            <a href="/coins/available" className="bo btn-dark col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/coins/available">Available Coins</Nav.Link>
              </Nav>    
            </a>    
            
            <a href="/coins/deposited" className="bo btn-dark col-sm">
              <Nav className="mr-auto tc">
                <Nav.Link className="tc" href="/coins/deposited">Deposited Coins</Nav.Link>
              </Nav>
            </a>
          </div>
          </div>
        </Navbar>
      </div> 

);


export default class CoinsStatus extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	num:0,result:0
	    };
	    this.handleChange = this.handleChange.bind(this);
	    this.add = this.add.bind(this);
	    this.key = this.key.bind(this);
    }
    handleChange (evt) {
    	console.log(Number(this.state.result))
	    this.setState({num:Number(evt.target.value)});
	    this.setState({})
    	console.log(this.state.num, this.state.result);
    }
    add(){
    	this.setState({result:Number(this.state.result)+Number(this.state.num)})
    }
    key(e){
    	if(e.key==="Tab" | e.key==="Enter"){
    		this.add()
    	}
    }

	render() {
		return (
			<div>
				<CoinNav />

				<form>

				<table class="table-bordered table center">
				    <thead>
				        <tr>
				            <th scope="col" className="col-2 ">Amount</th>
				            <th scope="col" className="col-2 ">Quantity</th>
				        </tr>
				    </thead>
				    <tbody>
				        <tr>
				            <th scope="row" className="r">10,000  X</th>
							<td className="l"><input type="number" placeholder="Fill Value and press tab" onKeyDown={this.key} onChange={this.handleChange} className="bl" id="one" /></td>

				        </tr>
				        <tr>
				            <th scope="row" className="r">5,000 X</th>
							<td className="l"><input type="number" placeholder="Fill Value and press tab" onClick={this.add} onKeyDown={this.key} onChange={this.handleChange} className="bl" id="two" /></td>
				        </tr>
				        <tr>
				            <th scope="row" className="r">2,000 X</th>
							<td className="l"><input type="number" placeholder="Fill Value and press tab" onClick={this.add} onKeyDown={this.key} onChange={this.handleChange} className="bl" id="three" /></td>
				        </tr>
				        <tr>
				            <th scope="row" className="r">1,000 X</th>
							<td className="l"><input type="number" placeholder="Fill Value and press tab" onClick={this.add} onKeyDown={this.key} onChange={this.handleChange} className="bl" id="four"/></td>
				        </tr>
				        <tr>
				            <th scope="row" className="r">500 X</th>
							<td className="l"><input type="number" placeholder="Fill Value and press tab" onClick={this.add} onKeyDown={this.key} onChange={this.handleChange} className="bl" id="five"/></td>
				        </tr>
				        <tr>
				            <th scope="row" className="r">100 X</th>
							<td className="l"><input type="number" placeholder="Fill Value and press tab" onClick={this.add} onKeyDown={this.key} onChange={this.handleChange} className="bl" id="six" /></td>
				        </tr>
				        <tr>
				            <th scope="row" className="r">50 X</th>
							<td className="l"><input type="number" placeholder="Fill Value and press tab" onClick={this.add} onKeyDown={this.key} onChange={this.handleChange} className="bl" id="seven"/></td>
				        </tr>
				    </tbody>
				    <thead>
				        <tr>
				            <th scope="col" className="col-2 ">Total</th>
				            <th scope="col" className="col-2 ">{this.state.result}</th>
				        </tr>
				    </thead>
				</table>

				</form>

			</div>
		)
	}
}