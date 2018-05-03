import React from "react";
import "./ImageCard.css";

const ImageCard =props=> (
  // state = {
  //   clicked: false
  // };

  // handleClicked = () => {
  //   // We always use the setState method to update a component's state
    
  //   switch(this.state.clicked){
  //   case true:
  //     console.log("YOU ALREADY CLICKED THIS JACKASS")
  //   break;
  //   case false:
  //   this.setState({ clicked: true});
  //   break;
  //   }
    
  // };

 
    
  <div className="image-div .d-inline-block" onClick={() => props.handleScore(props.id)} >
    <div className="img-container h-100 w-100">
      <img alt={props.name} src={props.image} className="img-fluid h-100 w-100"/>
    </div>
  </div>

)

export default ImageCard;

