import React from "react";
import "./ImageCard.css";

const ImageCard =props=> (    
  <div className="image-div .d-inline-block" onClick={() => props.handleScore(props.id)} >
    <div className="img-container h-100 w-100">
      <img alt={props.name} src={props.image} className="img-fluid h-100 w-100"/>
    </div>
  </div>

)

export default ImageCard;

