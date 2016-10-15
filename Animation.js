"use strict";
var SnakePart_1 = require("./SnakePart");
var Animation = (function () {
    function Animation(x, y, special) {
        this.x = x;
        this.y = y;
        this.color = this.getRandomColor();
        this.time = Date.now();
        this.special = special;
    }
    Animation.prototype.draw = function (canvasContext) {
        if (this.special)
            this.color = this.getRandomColor();
        var now = Date.now();
        canvasContext.lineWidth = 30 / ((now - this.time) / (Animation.TIME / 10));
        canvasContext.beginPath();
        canvasContext.strokeStyle = this.color;
        canvasContext.arc(this.x * SnakePart_1.SnakePart.PixelPerPoint + 1, this.y * SnakePart_1.SnakePart.PixelPerPoint + 1, 10 * (now - this.time) / 100 * SnakePart_1.SnakePart.PixelPerPoint, 0, Math.PI * 2);
        canvasContext.stroke();
        if (this.special) {
            canvasContext.fillStyle = this.color;
            canvasContext.fill();
        }
        //Reset des variables used
        canvasContext.strokeStyle = "#000000";
        canvasContext.lineWidth = 1;
    };
    Animation.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    Animation.TIME = 3000;
    return Animation;
}());
exports.Animation = Animation;
