import React, { Component } from 'react';
import { Media } from 'reactstrap';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class Dishdetail extends Component {

  constructor(props) {
      super(props);


  }

  renderDish(dish) {

    return (
      <Card key={this.props.dish.id}>
              <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
              <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
              </CardBody>
          </Card>


    );
  }

  renderComments(comments) {
    if (comments == null) {
      return (
        <div><h4>Comments</h4></div>
      );
    } else {
      const c = comments.map((co) => {

        return (
          
            <ul key ={co.id} class="list-unstyled">
            <li>{co.comment}</li>
            <li>--{co.author}, {co.date}</li>
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



  render() {
      
        if (this.props.dish != null) {

          return (
            <div class="row row-content">
          <div class="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>

          <div class="col-12 col-md-5 m-1" >
            {this.renderComments(this.props.dish.comments)}
          </div>
          
        </div>

          );
          
        } else {

          return (
            <div></div>

          );
        }
        
      
  }
}


export default Dishdetail;