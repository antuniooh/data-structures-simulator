import React, { Component, Image } from 'react';
import Canvas, { Image as CanvasImage } from 'react-native-canvas';
import LinkedQueue from '../../objects/LinkedQueue';
import StaticQueue from '../../objects/StaticQueue';
import HashTable from '../../objects/HashTable';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

var dataPositionsStaticQueue = [
  { x: 220, y: 210, angle: 0.785398, value: null, color: '#ACA344' },
  { x: 160, y: 260, angle: 1.5708, value: null, color: '#ACA344' },
  { x: 87, y: 260, angle: 2.35619, value: null, color: '#ACA344' },
  { x: 20, y: 210, angle: 3.14159, value: null, color: '#ACA344' },
  { x: 20, y: 130, angle: 3.92699, value: null, color: '#ACA344' },
  { x: 87, y: 70, angle: 4.71239, value: null, color: '#ACA344' },
  { x: 160, y: 70, angle: 5.49779, value: null, color: '#ACA344' },
  { x: 220, y: 130, angle: 6.28319, value: null, color: '#ACA344' },
];

var sizeStaticQueue = 0;

var dataPositionsDoubleLinked = [
  { x: 20, y: 10, value: null, color: '#670D67' },
  { x: 120, y: 10, value: null, color: '#670D67' },
  { x: 220, y: 10, value: null, color: '#670D67' },
  { x: 220, y: 110, value: null, color: '#670D67' },
  { x: 120, y: 110, value: null, color: '#670D67' },
  { x: 20, y: 110, value: null, color: '#670D67' },
  { x: 20, y: 210, value: null, color: '#670D67' },
  { x: 120, y: 210, value: null, color: '#670D67' },
  { x: 220, y: 210, value: null, color: '#670D67' },
];

var sizeDoubleLinked = 0;

export default class DrawCanvas {
  constructor(canvas, structure) {
    this.structureObj = structure;

    this.arrayElements = [];

    this.squareSize = { width: 40, heigth: 40 };
    this.canvas = canvas;
    this.canvas.height = 300;
    this.canvas.width = 300;

    this.ctx = canvas.getContext('2d');

    this.drawBackgroundCanvas = this.drawBackgroundCanvas.bind(this);
    this.squareInsert = this.squareInsert.bind(this);

    this.insertStaticQueue = this.insertStaticQueue.bind(this);
    this.removeStaticQueue = this.removeStaticQueue.bind(this);
    this.searchStaticQueue = this.searchStaticQueue.bind(this);
    this.clearStaticQueue = this.clearStaticQueue.bind(this);
    this.drawStaticQueue = this.drawStaticQueue.bind(this);

    this.insertDoubleLinked = this.insertDoubleLinked.bind(this);
    this.removeDoubleLinked = this.removeDoubleLinked.bind(this);
    this.searchDoubleLinked = this.searchDoubleLinked.bind(this);
    this.clearDoubleLinked = this.clearDoubleLinked.bind(this);
    this.drawDoubleLinked = this.drawDoubleLinked.bind(this);

    this.clearCanvas = this.clearCanvas.bind(this);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  insertStaticQueue(valueReceive) {
    if (valueReceive != '') {
      if (this.structureObj.insert(valueReceive)) {
        dataPositionsStaticQueue[sizeStaticQueue].value = valueReceive;
        sizeStaticQueue++;
        this.drawStaticQueue();
      }
    }
  }

  drawStaticQueue() {
    this.clearCanvas();
    var radius = 100;
    var anglePadding = (1 * Math.PI) / 180;

    this.ctx.lineWidth = 90;

    for (var i = 0; i < dataPositionsStaticQueue.length; i++) {
      if (dataPositionsStaticQueue[i].value != null) {
        var startAngle = 0;
        if (i > 0) {
          startAngle = dataPositionsStaticQueue[i - 1].angle;
        }

        this.ctx.strokeStyle = dataPositionsStaticQueue[i].color;
        this.ctx.beginPath();
        this.ctx.arc(
          this.canvas.width / 2,
          this.canvas.height / 2,
          radius,
          startAngle,
          dataPositionsStaticQueue[i].angle - anglePadding
        );
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.font = 'bold 40px verdana, sans-serif';
        this.ctx.fillStyle = 'white';

        this.ctx.fillText(
          dataPositionsStaticQueue[i].value,
          dataPositionsStaticQueue[i].x,
          dataPositionsStaticQueue[i].y,
          50
        );
        this.ctx.stroke();
      }
    }
  }

  removeStaticQueue(valueReceive) {
    if (this.structureObj.remove(valueReceive)) {
      dataPositionsStaticQueue[sizeStaticQueue - 1].value = null;
      sizeStaticQueue--;
      this.drawStaticQueue();
    }
  }

  async searchStaticQueue(valueReceive) {
    this.structureObj.search(valueReceive);
    for (let i = 0; i < sizeStaticQueue; i++) {
      if (dataPositionsStaticQueue[i].value == valueReceive) {
        dataPositionsStaticQueue[i].color = 'green';
        break;
      } else dataPositionsStaticQueue[i].color = 'gray';
      await sleep(1000);
      this.drawStaticQueue();
    }
    await sleep(1000);

    this.drawStaticQueue();

    for (let i = 0; i < sizeStaticQueue; i++) {
      dataPositionsStaticQueue[i].color = '#ACA344';
    }
  }

  clearStaticQueue() {
    if (this.structureObj.clear()) {
      for (var i = 0; i < sizeStaticQueue; i++) {
        dataPositionsStaticQueue[i].value = null;
      }
      sizeStaticQueue = 0;
    }
    this.drawStaticQueue();
  }

  insertDoubleLinked(valueReceive) {
    if (valueReceive != '' && sizeDoubleLinked < 9) {
      if (this.structureObj.insert(valueReceive)) {
        dataPositionsDoubleLinked[sizeDoubleLinked].value = valueReceive;
        sizeDoubleLinked++;
        this.drawDoubleLinked();
      }
    }
  }

  removeDoubleLinked(valueReceive) {
    if (this.structureObj.remove(valueReceive)) {
      dataPositionsDoubleLinked[sizeDoubleLinked - 1].value = null;
      sizeDoubleLinked--;
      this.drawDoubleLinked();
    }
  }

  async searchDoubleLinked(valueReceive) {
    this.structureObj.search(valueReceive);
    for (let i = 0; i < sizeDoubleLinked; i++) {
      if (dataPositionsDoubleLinked[i].value == valueReceive) {
        dataPositionsDoubleLinked[i].color = 'green';
        break;
      } else dataPositionsDoubleLinked[i].color = 'gray';
      await sleep(1000);
      this.drawDoubleLinked();
    }
    await sleep(1000);

    this.drawDoubleLinked();

    for (let i = 0; i < sizeDoubleLinked; i++) {
      dataPositionsDoubleLinked[i].color = '#670D67';
    }
  }

  clearDoubleLinked() {
    if (this.structureObj.clear()) {
      for (var i = 0; i < sizeDoubleLinked; i++) {
        dataPositionsDoubleLinked[i].value = null;
      }
      sizeDoubleLinked = 0;
    }
    this.drawDoubleLinked();
  }

  drawDoubleLinked() {
    this.clearCanvas();

    for (var i = 0; i < dataPositionsDoubleLinked.length; i++) {
      if (dataPositionsDoubleLinked[i].value != null) {
        this.ctx.rect(
          dataPositionsDoubleLinked[i].x,
          dataPositionsDoubleLinked[i].y,
          60,
          60
        );
        this.ctx.fillStyle = dataPositionsDoubleLinked[i].color;
        this.ctx.fill();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = 'black';
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.font = 'bold 30px verdana, sans-serif';
        this.ctx.fillStyle = 'white';

        this.ctx.fillText(
          dataPositionsDoubleLinked[i].value,
          dataPositionsDoubleLinked[i].x + 18,
          dataPositionsDoubleLinked[i].y + 40,
          50
        );
        this.ctx.stroke();

        if (sizeDoubleLinked > 1 && i < 8 ) {
            //first and third line
            if ((i >= 0 && i < 2) || (i >= 6 && i < 9)) {
              this.draw_arrow(
                this.ctx,
                dataPositionsDoubleLinked[i].x + 60,
                dataPositionsDoubleLinked[i].y + 30,
                dataPositionsDoubleLinked[i + 1].x,
                dataPositionsDoubleLinked[i + 1].y + 30
              );
            } 
            //border
            else if (i == 2 || i == 5) {
              this.draw_arrow(
                this.ctx,
                dataPositionsDoubleLinked[i].x + 30,
                dataPositionsDoubleLinked[i].y + 60,
                dataPositionsDoubleLinked[i + 1].x + 30,
                dataPositionsDoubleLinked[i + 1].y
              );
            } 
            //second line
            else if (i >= 3 && i < 5) {
              this.draw_arrow(
                this.ctx,
                dataPositionsDoubleLinked[i].x ,
                dataPositionsDoubleLinked[i].y + 30,
                dataPositionsDoubleLinked[i + 1].x + 60,
                dataPositionsDoubleLinked[i + 1].y + 30
              );
            }
          }
      }
    }
  }

  drawBackgroundCanvas(posy, posx, width, height) {
    this.ctx.fillRect(posy, posx, width, height);
  }

  draw_square(posy, posx) {
    this.ctx.fillStyle = 'purple';
    this.ctx.fillRect(0, 0, this.squareSize.width, this.squareSize.height);
    this.atualizeCanvas();
  }

  squareInsert(value) {
    if (this.arrayElements.length == 0) {
      this.draw_square(0, 0);
      this.arrayElements.push({ x: 0, y: 0, valor: value });
    } else {
      let x = this.arrayElements[this.arrayElements.length - 1].x;
      let y = this.arrayElements[this.arrayElements.length - 1].y;
      if (y + this.squareSize.width >= this.canvasSize.width) {
        this.draw_square(
          y + 30,
          x + 30,
          this.squareSize.width,
          this.squareSize.heigth
        );
        this.arrayElements.push({ x: x + 30, y: y + 30, value });
      } else {
        this.draw_square(
          y + 30,
          x,
          this.squareSize.width,
          this.squareSize.heigth
        );
        this.arrayElements.push({ x: x + 30, y: y, value });
      }
    }
    this.atualizeCanvas();
  }

  draw_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10;
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(
      tox - headlen * Math.cos(angle - Math.PI / 6),
      toy - headlen * Math.sin(angle - Math.PI / 6)
    );
    context.moveTo(tox, toy);
    context.lineTo(
      tox - headlen * Math.cos(angle + Math.PI / 6),
      toy - headlen * Math.sin(angle + Math.PI / 6)
    );

    dx = fromx - tox;
    dy = fromy - toy;
    angle = Math.atan2(dy, dx);
    
    context.moveTo(tox, toy);
    context.lineTo(fromx, fromy);
    context.lineTo(
      fromx - headlen * Math.cos(angle - Math.PI / 6),
      fromy - headlen * Math.sin(angle - Math.PI / 6)
    );
    context.moveTo(fromx, fromy);
    context.lineTo(
      fromx - headlen * Math.cos(angle + Math.PI / 6),
      fromy - headlen * Math.sin(angle + Math.PI / 6)
    );
  }
}
