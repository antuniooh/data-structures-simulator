import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
import LinkedQueue from '../../objects/LinkedQueue';
import StaticQueue from '../../objects/StaticQueue';
import HashTable from '../../objects/HashTable';

export default class DrawCanvas {
  constructor(canvas, structure) {
    if (structure == 'ldde') {
      this.structureObj = new LinkedQueue();
    } else if (structure == 'fec') {
      this.structureObj = new StaticQueue();
    } else if (structure == 'hash') {
      this.structureObj = new HashTable();
    }

    this.array_elements = [];
    this.square_size = { width: 20, heigth: 20 };
    this.canvas_size = { height: 600, width: 600 };
    this.canvas = canvas;
    this.canvas.height = this.canvas_size.height;
    this.canvas.width = this.canvas_size.width;
    this.ctx = canvas.getContext('2d');
    this.draw_canvas = this.draw_canvas.bind(this);
    this.square_insert = this.square_insert.bind(this);
  }

  draw_canvas(posy, posx, width, height) {
    this.ctx.fillRect(posy, posx, width, height);
  }

  draw_square(posy, posx) {
    this.ctx.fillRect(posy, posx, this.square_size.width, this.square_size.height);
  }

  square_insert(value) {
    if (this.array_elements.length == 0) {
      this.draw_square(0, 0);
      this.array_elements.push({ x: 0, y: 0, valor: value });
    } else {
      let x = this.array_elements[this.array_elements.length - 1].x;
      let y = this.array_elements[this.array_elements.length - 1].y;
      if (y + this.square_size.width >= this.canvas_size.width) {
        this.draw_square(
          y + 30,
          x + 30,
          this.square_size.width,
          this.square_size.heigth
        );
        this.array_elements.push({ x: x + 30, y: y + 30, value });
      } else {
        this.draw_square(
          y + 30,
          x,
          this.square_size.width,
          this.square_size.heigth
        );
        this.array_elements.push({ x: x + 30, y: y, value });
      }
    }
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
    if (this.array_elements > 0) {
      let x = this.array_elements[this.array_elements.length - 1].x;
      let y = this.array_elements[this.array_elements.length - 1].y;
      draw_new_ldde_node(x, y, value);
    } else {
      draw_new_ldde_node(0, 0, value);
    }
  }
}