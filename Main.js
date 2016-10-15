"use strict";
var Game_1 = require("./Game");
var canvas = document.getElementById("snakeGame");
canvas.height = 700;
canvas.width = 1400;
var speed = 20;
var game = new Game_1.Game(canvas, speed);
game.start();
