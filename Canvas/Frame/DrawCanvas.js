import React, { Component, Image } from 'react';
import Canvas, { Image as CanvasImage } from 'react-native-canvas';
import LinkedQueue from '../../objects/LinkedQueue';
import StaticQueue from '../../objects/StaticQueue';
import HashTable from '../../objects/HashTable';

var dataPositionsStaticQueue = [
  { x: 220, y: 210, angle: 0.785398, value: null, color: 'black' },
  { x: 160, y: 260, angle: 1.5708, value: null, color: 'black' },
  { x: 87, y: 260, angle: 2.35619, value: null, color: 'black' },
  { x: 20, y: 210, angle: 3.14159, value: null, color: 'black' },
  { x: 20, y: 130, angle: 3.92699, value: null, color: 'black' },
  { x: 87, y: 70, angle: 4.71239, value: null, color: 'black' },
  { x: 160, y: 70, angle: 5.49779, value: null, color: 'black' },
  { x: 220, y: 130, angle: 6.28319, value: null, color: 'black' },
];

var sizeStaticQueue = 0;

export default class DrawCanvas {
  constructor(canvas, structure) {
    this.structureObj = structure;

    this.arrayElements = [];

    this.squareWidth = 60;
    this.squareHeigth = 30;
    this.canvas = canvas;
    this.canvas.height = 300;
    this.canvas.width = 300;

    this.ctx = canvas.getContext('2d');

    this.drawBackgroundCanvas = this.drawBackgroundCanvas.bind(this);
    this.removeHash = this.removeHash.bind(this);
    this.searchHash = this.searchHash.bind(this);

    this.insertStaticQueue = this.insertStaticQueue.bind(this);
    this.removeStaticQueue = this.removeStaticQueue.bind(this);
    this.searchStaticQueue = this.searchStaticQueue.bind(this);
    this.clearStaticQueue = this.clearStaticQueue.bind(this);
    this.drawStaticQueue = this.drawStaticQueue.bind(this);

    this.clearCanvas = this.clearCanvas.bind(this);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  insertStaticQueue(valueReceive) {
    if (this.structureObj.insert(valueReceive)) {
      dataPositionsStaticQueue[sizeStaticQueue].value = valueReceive;
      sizeStaticQueue++;
    }
    this.drawStaticQueue();
  }

  drawStaticQueue() {
    alert('a');

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

  removeStaticQueue() {
    if (this.structureObj.remove()) {
      dataPositionsStaticQueue[sizeStaticQueue - 1].value = null;
      sizeStaticQueue--;
    }
    this.drawStaticQueue();
  }

  searchStaticQueue(valueReceive) {
    if (this.structureObj.search(valueReceive)) {
      for (var i = 0; i < sizeStaticQueue; i++) {
        if (dataPositionsStaticQueue[i].value == valueReceive) {
          dataPositionsStaticQueue[i].color = 'lightblue';
          break;
        } else dataPositionsStaticQueue[i].color = 'blue';

        setTimeout(function () {
          this.drawStaticQueue();
        }, 5000);
      }
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

  drawBackgroundCanvas(posy, posx, width, height) {
    this.ctx.fillRect(posy, posx, width, height);
  }

  draw_square(posx, posy) {
    this.ctx.fillStyle = 'purple';
    this.ctx.fillRect(posx, posy, this.squareWidth, this.squareHeigth);
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
  }

  draw_circle(ctx, posy, posx, size) {
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.arc(posy, posx, size, 0, (Math.PI / 180) * 360, false);
    ctx.stroke();
  }

  insert_ldde(value) {
    if (this.arrayElements > 0) {
      let x = this.arrayElements[this.arrayElements.length - 1].x;
      let y = this.arrayElements[this.arrayElements.length - 1].y;
      draw_new_ldde_node(x, y, value);
    } else {
      draw_new_ldde_node(0, 0, value);
    }
  }

  drawSquareText(posx, posy, key, value, colorBackground) {
    //this.ctx.rect(posx, posy, this.squareWidth, this.squareHeigth);
    //this.ctx.fill();
    //this.ctx.lineWidth = 2;
    //this.ctx.stroke();
    this.ctx.fillStyle = colorBackground;
    this.ctx.fillRect(posx, posy, this.squareWidth, this.squareHeigth);
    this.ctx.font = 'bold 20px verdana, sans-serif';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(key, posx + 15, posy + 15);

    //this.ctx.rect(posx + 65, posy, this.squareWidth, this.squareHeigth);
    //this.ctx.fill();
    //this.ctx.lineWidth = 2;
    //this.ctx.stroke();
    this.ctx.fillStyle = colorBackground;
    this.ctx.fillRect(posx + 65, posy, this.squareWidth, this.squareHeigth);
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(value, posx + 75, posy + 15);
  }

  arrayIsEmpty() {
    let isEmpty = true;
    if (this.arrayElements.length == 0) {
      return true;
    }
    for (let i = 0; i < this.arrayElements.length; i++) {
      if (this.arrayElements[i] != null) {
        isEmpty = false;
      }
    }
    return isEmpty;
  }

  sortByKey() {
    if (!this.arrayIsEmpty()) {
      let menor = null;
      for (let i = 0; i < this.arrayElements.length - 1; i++) {
        for (let j = i + 1; j < this.arrayElements.length; j++) {
          if (
            this.arrayElements[i] != null &&
            this.arrayElements[j] != null &&
            this.arrayElements[i].y > this.arrayElements[j].y
          ) {
            let temp = this.arrayElements[i].y;
            this.arrayElements[i].y = this.arrayElements[j].y;
            this.arrayElements[j].y = temp;
          }
        }
      }
    }
    //console.log(this.arrayElements);
  }

  insertHash(key, value) {
    if (this.structureObj.insert(key, value)) {
      let hash_key = this.structureObj.hash(key);
      if (this.arrayIsEmpty()) {
        this.arrayElements[hash_key] = {
          x: 80,
          y: 75,
          key: key,
          value: value,
        };
      } else {
        if (this.arrayElements[hash_key]) {
          this.arrayElements[hash_key].value = value;
        } else {
          let bigger = 0;
          let bigger_hash = null;
          for ( var i = 0; i < this.arrayElements.length; i++){
            if (this.arrayElements[i] && this.arrayElements[i].y > bigger){
              bigger = this.arrayElements[i].y
              bigger_hash = this.arrayElements[i];
            }
          }
          let xArray = bigger_hash.x;
          let yArray = bigger_hash.y;
          this.arrayElements[hash_key] = {
            x: xArray,
            y: yArray + 40,
            key: key,
            value: value,
          };
        }
      }
      this.sortByKey();
      this.drawHash();
    }
  }

  drawHash(searchKey) {
    if (this.arrayElements.length > 0) {
      this.clearCanvas();
      this.drawSquareText(80, 35, 'key', 'value', 'white');
      for (var i = 0; i < this.arrayElements.length; i++) {
        if (this.arrayElements[i] != null) {
          let x = this.arrayElements[i].x;
          let y = this.arrayElements[i].y;
          let key = this.arrayElements[i].key.toString();
          let value = this.arrayElements[i].value.toString();
          if (
            typeof searchKey !== 'undefined' &&
            this.arrayElements[i].key === searchKey
          ) {
            this.drawSquareText(x, y, key, value, 'green');
          } else {
            this.drawSquareText(x, y, key, value, 'white');
          }
        }
      }
    }
  }

  searchHash(key) {
    let hash_key = this.structureObj.hash(key);
    if (this.arrayElements[hash_key]) {
      alert('O valor ' + key + 'foi achado');
      this.drawHash(key);
    } else {
      alert('A chave ' + key + ' nao existe');
    }
  }

  removeHash(key) {
    console.log(this.arrayElements);
    let hash_key = this.structureObj.hash(key);
    let last = null;
    if (this.structureObj.remove(key)) {
      if (
        !this.arrayIsEmpty() &&
        this.structureObj.getSize() > 1 &&
        this.arrayElements[hash_key]
      ) {
        if (this.arrayElements.length > hash_key) {
          console.log("Entrou no 1");
          for (var i = this.arrayElements.length - 1; i > hash_key; i--) {
            for (var j = i - 1; j > hash_key; j--){
              if (this.arrayElements[j] != null){
                break;
              }
            }
            if (this.arrayElements[i] != null){
              this.arrayElements[i].y = this.arrayElements[j].y;
            }
          }
        }
        this.arrayElements[hash_key] = null;
        console.log(this.arrayElements);
      } else if (this.arrayElements[hash_key]) {
        console.log('Entrou no else if');
        this.arrayElements[hash_key] = null;
      }
      this.drawHash();
    } else {
      alert('Nao encontrou para remover');
    }
  }

  clear() {
    if (this.structureObj.clear()) {
      this.arrayElements = [];
      this.clearCanvas();
      alert('structure and canvas was clear');
    }
  }
}
