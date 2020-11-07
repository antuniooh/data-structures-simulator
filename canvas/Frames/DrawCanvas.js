/**
 * @class       : canvas
 * @author      : Henrique Vital Carvalho (henriquevital1000@hotmail.com)
 * @created     : sábado nov 07, 2020 16:06:41 -03
 * @description : canvas
 */

import React, {Component} from 'react';
import Canvas from 'react-native-canvas';

export default class DrawCanvas {
    constructor(canvas, posx, posy, width, height) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'purple';
        ctx.fillRect(posx, posy, width, height);
    }
}


