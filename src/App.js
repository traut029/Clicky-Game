import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    images: images,
    currentScore: 0,
    bestScore: 0,
    unClickedImages: images,
    message: "Click an image to begin!"
  };
  //Function that shuffles image array
  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  //call shuffle for first image load
  componentWillMount = () => {
    this.shuffle(images);
  }

  handleScore = id => {
    if (this.state.unClickedImages.find(image => image.id === id) == undefined) {
      this.setState({
        currentScore: 0,
        images: images,
        unClickedImages: images,
        message: "You guessed incorrectly!"
      })
    }
    else {

      this.setState({
        currentScore: this.state.currentScore + 1,
        unClickedImages: this.state.unClickedImages.filter(image => image.id !== id),
        message: "You guessed correctly!"
      }, function () {
        this.handleBestScore()
      })
    }
    this.shuffle(images)
  }

  handleBestScore = () => {
    console.log("BEST SCORE FUNCTION RUNNING")
    if (this.state.bestScore < this.state.currentScore) {
      this.setState({
        bestScore: this.state.currentScore
      })
    }
    if (this.state.currentScore == 12) {
      this.setState({
        message: "You Won!",
        currentScore: 0
      })
    }
  }

  render() {
    return (
      <div>
        <NavBar
          message={this.state.message}
          score={this.state.currentScore}
          bestScore={this.state.bestScore}
        />
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;