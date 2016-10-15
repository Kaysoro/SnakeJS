"use strict";
var SnakePart_1 = require("./SnakePart");
var SnakeDirection_1 = require("./SnakeDirection");
var Snake = (function () {
    function Snake(lenght, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.parts = [];
        for (var i = x; i < lenght + x; i++) {
            this.parts.push(new SnakePart_1.SnakePart(i, y, i == lenght - 1 + x));
            this.direction = SnakeDirection_1.SnakeDirection.NONE;
        }
    }
    Snake.prototype.draw = function (canvasContext) {
        for (var _i = 0, _a = this.parts; _i < _a.length; _i++) {
            var part = _a[_i];
            part.draw(canvasContext);
        }
    };
    Snake.prototype.move = function (gridWidth, gridHeight) {
        this.parts[this.parts.length - 1].head = false;
        switch (this.direction) {
            case SnakeDirection_1.SnakeDirection.LEFT:
                this.parts.push(new SnakePart_1.SnakePart((this.parts[this.parts.length - 1].x - 1 + gridWidth) % gridWidth, this.parts[this.parts.length - 1].y, true));
                this.parts.splice(0, 1);
                break;
            case SnakeDirection_1.SnakeDirection.UP:
                this.parts.push(new SnakePart_1.SnakePart(this.parts[this.parts.length - 1].x, (this.parts[this.parts.length - 1].y - 1 + gridHeight) % gridHeight, true));
                this.parts.splice(0, 1);
                break;
            case SnakeDirection_1.SnakeDirection.RIGHT:
                this.parts.push(new SnakePart_1.SnakePart((this.parts[this.parts.length - 1].x + 1) % gridWidth, this.parts[this.parts.length - 1].y, true));
                this.parts.splice(0, 1);
                break;
            case SnakeDirection_1.SnakeDirection.DOWN:
                this.parts.push(new SnakePart_1.SnakePart(this.parts[this.parts.length - 1].x, (this.parts[this.parts.length - 1].y + 1) % gridHeight, true));
                this.parts.splice(0, 1);
                break;
        }
    };
    Snake.prototype.grow = function () {
        var x = this.parts[this.parts.length - 1].x;
        var y = this.parts[this.parts.length - 1].y;
        switch (this.direction) {
            case SnakeDirection_1.SnakeDirection.LEFT:
                this.parts.push(new SnakePart_1.SnakePart(x - 1, y, false));
                break;
            case SnakeDirection_1.SnakeDirection.UP:
                this.parts.push(new SnakePart_1.SnakePart(x, y + 1, false));
                break;
            case SnakeDirection_1.SnakeDirection.RIGHT:
                this.parts.push(new SnakePart_1.SnakePart(x - 1, y, false));
                break;
            case SnakeDirection_1.SnakeDirection.DOWN:
                this.parts.push(new SnakePart_1.SnakePart(x, y - 1, false));
                break;
            default:
                break;
        }
    };
    return Snake;
}());
exports.Snake = Snake;
