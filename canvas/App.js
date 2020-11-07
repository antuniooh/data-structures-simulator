import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
import DrawCanvas from './Frames/DrawCanvas';

class App extends Component {

  handleCanvas = (canvas) => {
    var canvas_obj = new DrawCanvas(canvas, 100, 100, 500, 500);
    /*const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'purple';
    ctx.fillRect(100, 100, 500, 500);*/
  }

  render() {
    return (
      <Canvas ref={this.handleCanvas}/>
    )
  }
}

export default App;

