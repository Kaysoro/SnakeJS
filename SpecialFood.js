"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Food_1 = require("./Food");
var SnakePart_1 = require("./SnakePart");
var SpecialFood = (function (_super) {
    __extends(SpecialFood, _super);
    function SpecialFood(x, y) {
        _super.call(this, x, y);
        this.score = 10;
        this.time = Date.now();
        this.create = true;
    }
    SpecialFood.prototype.draw = function (canvasContext) {
        canvasContext.beginPath();
        canvasContext.fillStyle = "#FFCD27";
        canvasContext.fillRect(this.x * SnakePart_1.SnakePart.PixelPerPoint + 1, this.y * SnakePart_1.SnakePart.PixelPerPoint + 1, SnakePart_1.SnakePart.PixelPerPoint, SnakePart_1.SnakePart.PixelPerPoint);
        canvasContext.fillStyle = "#000000";
        canvasContext.rect(this.x * SnakePart_1.SnakePart.PixelPerPoint + 1, this.y * SnakePart_1.SnakePart.PixelPerPoint + 1, SnakePart_1.SnakePart.PixelPerPoint, SnakePart_1.SnakePart.PixelPerPoint);
        canvasContext.stroke();
    };
    SpecialFood.prototype.trySuppress = function () {
        if (Date.now() - this.time > 3000) {
            this.x = -1;
            this.y = -1;
            this.create = false;
        }
    };
    SpecialFood.prototype.suppress = function () {
        this.x = -1;
        this.y = -1;
        this.create = false;
    };
    return SpecialFood;
}(Food_1.Food));
exports.SpecialFood = SpecialFood;
