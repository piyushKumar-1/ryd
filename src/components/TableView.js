import React from 'react';
import '../App.css';


var createreactclass = require('create-react-class')


var Hello = createreactclass({
    render: function() {
        var i=0;
        var names = ['Jake', 'Jon', 'Thruster', 'Piyush', 'Jhony', 'Bahubali', 'Kattapa', 'Mogali', 'Bhallaldev'];
        var cardlist = names.map(function(name, i = i+1){


          if(i%3===0){return (<div className="col-sm-4 pt-3">    
                      <h2>{i/3+1} Section: </h2>
                                    <div className="card w-33">
                          <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

                          <div className="card-body">
                            <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                          </div>
                        </div>
                      </div>
/* eslint-disable */
                      
                      );}
                      else{
                        return (<div className="col-sm-4 pt-3">
                  
                          <h2><br/></h2>
                          <div className="card w-33">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

                            <div className="card-body">
                              <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                            </div>
                          </div>
                        </div>
                      );}
                    })
        return  <div className="row">{ cardlist }</div>
    }
});



class TableView extends React.Component {
  
  

   

  render() {

   

    return (
       <div className="container pt-3">
          <h2 className="zl">TableView: </h2>
          <Hello/>
      </div>
    );
  }
}



export default TableView;
