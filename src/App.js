import React, { Component } from "react";
import ImageCard from "./components/ImageCard";

import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images: images,
    currentScore: 0,
    bestScore: 0,
    unClickedImages:images,
    message:"Click and image to begin!"
  };
  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  handleScore = id => {
    console.log("handleScore activated!")
   if(this.state.unClickedImages.find(image => image.id === id)==undefined){
    console.log("INCORRECT GUESS")
    this.setState({
      currentScore:0,
      images:images,
      unClickedImages:images,
      message:"You guessed incorrectly!"
    })
   }
   else{
    
    this.setState({
      currentScore:this.state.currentScore +1,
      unClickedImages: this.state.unClickedImages.filter(image=>image.id !== id),
      message:"You guessed correctly!"
    }, function(){
     this.handleBestScore()
    })
   }
   if(this.state.currentScore==12){
     this.setState({
       message:"You Won!",
       currentScore:0
     })
   }
   this.shuffle(images)

  }

handleBestScore=()=>{
  console.log("BEST SCORE FUNCTION RUNNING")
  if(this.state.bestScore<this.state.currentScore){
    this.setState({
      bestScore:this.state.currentScore
    })
  }
}

  render() {
    return (
      <div>
        <p className="text-center">Message: {this.state.message}</p>
        <p className="score-counter text-center"> Current Score: {this.state.currentScore} Best Score {this.state.bestScore}</p>
        {this.state.images.map(image => (
          <ImageCard
            handleScore={this.handleScore}
              id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
           />         
        ))}
        </div>        
      );    
    }
  }
export default App;