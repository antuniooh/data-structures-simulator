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

var dataPositionsHashTable = [];

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

    this.insertHash = this.insertHash.bind(this);
    this.removeHash = this.removeHash.bind(this);
    this.searchHash = this.searchHash.bind(this);
    this.clearHash = this.clearHash.bind(this);
    this.drawHash = this.drawHash.bind(this);

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

    //start all
    this.clearDoubleLinked();
    this.clearStaticQueue();
    this.clearHash();
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
      if (this.structureObj.insert(parseInt(valueReceive))) {
        let tmp = this.structureObj.first;
        let i = 0;
        while (tmp != null) {
          dataPositionsDoubleLinked[i].value = tmp.value;
          tmp = tmp.next;
          i++;
        }

        sizeDoubleLinked++;
        this.drawDoubleLinked();
      }
    }
  }

  removeDoubleLinked(valueReceive) {
    for (let i = 0; i < sizeDoubleLinked; i++)
      dataPositionsDoubleLinked[i].value = null;

    if (this.structureObj.remove(parseInt(valueReceive))) {
      let tmp = this.structureObj.first;
      let i = 0;
      while (tmp != null) {
        dataPositionsDoubleLinked[i].value = tmp.value;
        tmp = tmp.next;
        i++;
      }
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
    this.clearCanvas();
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

        if (sizeDoubleLinked > 1 && i >= 0 && i < 8) {
          //first and third line
          if (
            i + 1 < sizeDoubleLinked &&
            ((i >= 0 && i < 2) || (i >= 6 && i < 9))
          ) {
            this.drawArrow(
              this.ctx,
              dataPositionsDoubleLinked[i].x + 60,
              dataPositionsDoubleLinked[i].y + 30,
              dataPositionsDoubleLinked[i + 1].x,
              dataPositionsDoubleLinked[i + 1].y + 30
            );
          }
          //border
          else if ((i == 2 || i == 5) && i + 1 < sizeDoubleLinked) {
            this.drawArrow(
              this.ctx,
              dataPositionsDoubleLinked[i].x + 30,
              dataPositionsDoubleLinked[i].y + 60,
              dataPositionsDoubleLinked[i + 1].x + 30,
              dataPositionsDoubleLinked[i + 1].y
            );
          }
          //second line
          else if (i >= 3 && i < 5 && i + 1 < sizeDoubleLinked) {
            this.drawArrow(
              this.ctx,
              dataPositionsDoubleLinked[i].x,
              dataPositionsDoubleLinked[i].y + 30,
              dataPositionsDoubleLinked[i + 1].x + 60,
              dataPositionsDoubleLinked[i + 1].y + 30
            );
          }
        }
      }
    }
  }

  drawArrow(context, fromx, fromy, tox, toy) {
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

  sortByKey() {
    dataPositionsHashTable.sort((a, b) => (a.key > b.key ? 1 : -1));
  }

  insertHash(key, value) {
    if (key != '' && value != '' && this.structureObj.getSize() <= 5) {
      if (this.structureObj.insert(key, value)) {
        var find = false;
        var hash_key = this.structureObj.hash(key);
        for (var i = 0; i < dataPositionsHashTable.length; i++) {
          if (dataPositionsHashTable[i].hash_key == hash_key) {
            find = true;
            break;
          }
        }
        if (find) {
          dataPositionsHashTable[i] = {
            x: 40,
            y: null,
            value: value,
            key: parseInt(key),
            hash_key: hash_key,
            color: 'black',
          };
        } else {
          dataPositionsHashTable.push({
            x: 40,
            y: null,
            value: value,
            key: parseInt(key),
            hash_key: hash_key,
            color: 'black',
          });
        }
        this.sortByKey();
        this.drawHash();
      }
    }
  }

  drawSquareText(x, y, color, key, value) {
    this.ctx.rect(x, y, 100, 40);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.rect(x + 100, y, 100, 40);
    this.ctx.fillStyle = color;
    this.ctx.fill();

    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = 'gray';
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.font = 'bold 15px verdana, sans-serif';
    this.ctx.fillStyle = 'white';

    this.ctx.fillText(key, x + 45, y + 25, 50);
    this.ctx.fillText(value, x + 145, y + 25, 50);
    this.ctx.stroke();
  }

  drawHash() {
    this.clearCanvas();

    var yLast = 40;

    this.drawSquareText(40, yLast, 'black', 'key', 'value');

    yLast += 40;
    for (var i = 0; i < dataPositionsHashTable.length; i++) {
      if (dataPositionsHashTable[i].value != null) {
        if (i > 0) yLast += 40;

        this.drawSquareText(
          dataPositionsHashTable[i].x,
          yLast,
          dataPositionsHashTable[i].color,
          dataPositionsHashTable[i].key,
          dataPositionsHashTable[i].value
        );
      }
    }
  }

  searchHash(key) {
    if (this.structureObj.search(key)) {
      for (var i = 0; i < this.structureObj.getSize(); i++) {
        if (dataPositionsHashTable[i].key == parseInt(key)) {
          dataPositionsHashTable[i].color = 'green';
          break;
        }
      }

      this.drawHash();

      dataPositionsHashTable[i].color = 'black';
    } else {
      alert('Numero nao encontrado');
    }
  }

  removeHash(keyReceive) {
    if (keyReceive != '') {
      if (this.structureObj.remove(keyReceive)) {
        let hash_key = this.structureObj.hash(keyReceive);
        for (var i = 0; i < dataPositionsHashTable.length; i++) {
          if (hash_key == dataPositionsHashTable[i].hash_key) {
            break;
          }
        }
        dataPositionsHashTable.splice(i, 1);
        this.drawHash();
      } else {
        alert('Numero nao encontrado');
      }
    }
  }

  clearHash() {
    if (this.structureObj.clear()) {
      dataPositionsHashTable = [];
      this.clearCanvas();
    }
  }
}
