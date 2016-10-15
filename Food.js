"use strict";
var SnakePart_1 = require("./SnakePart");
var Food = (function () {
    function Food(x, y) {
        this.x = x;
        this.y = y;
        this.score = 1;
    }
    Food.prototype.draw = function (canvasContext) {
        canvasContext.beginPath();
        canvasContext.fillStyle = "#FC1D27";
        canvasContext.fillRect(this.x * SnakePart_1.SnakePart.PixelPerPoint + 1, this.y * SnakePart_1.SnakePart.PixelPerPoint + 1, SnakePart_1.SnakePart.PixelPerPoint, SnakePart_1.SnakePart.PixelPerPoint);
        canvasContext.fillStyle = "#000000";
        canvasContext.rect(this.x * SnakePart_1.SnakePart.PixelPerPoint + 1, this.y * SnakePart_1.SnakePart.PixelPerPoint + 1, SnakePart_1.SnakePart.PixelPerPoint, SnakePart_1.SnakePart.PixelPerPoint);
        canvasContext.stroke();
    };
    return Food;
}());
exports.Food = Food;
