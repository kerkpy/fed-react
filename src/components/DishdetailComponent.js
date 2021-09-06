import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

function RenderDish({dish}) {

  

  return (
      
    <Card key={dish.id}>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>
    
    );
}

function RenderComments({comments}) {
  
  if (comments == null) {
    return (
      <div><h4>Comments</h4></div>
    );
  } else {
    const c = comments.map((co) => {

      return (

        
          <ul key ={co.id} class="list-unstyled">
          <li>{co.comment} </li>
          <li>--{co.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(co.date)))}</li>
          </ul>
          
      );

    });
    
    return (
      <div>
        <h4>Comments</h4>
        
        {c}
        



      </div>
      
      

    );
  }

  
}

const Dishdetail = (props) => {

    if (props.dish != null) {

      return (
        <div class = "container">
          <div class="row">
          <div class="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>

          <div class="col-12 col-md-5 m-1" >
            <RenderComments comments={props.dish.comments} />
          </div>
      
          </div>
        </div>
      );
    } else {
      return (
        <div><p>SADAS</p></div>
      );
    }
}


export default Dishdetail;