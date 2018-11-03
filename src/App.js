import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: ""
    };
    this.clicked = this.clicked.bind(this);
  }

   onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
  }
  clicked () {
    this.setState({
      message: "took photo!"
    });
  }
  render () {
    return (
      <div className="App">
        <Camera
          idealFacingMode = "environment"
          imageType = "png"

          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
        <button onClick={this.clicked}>click me!</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
