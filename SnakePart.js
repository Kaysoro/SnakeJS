"use strict";
var SnakePart = (function () {
    function SnakePart(x, y, head) {
        this.x = x;
        this.y = y;
        this.head = head;
    }
    SnakePart.prototype.draw = function (canvasContext) {
        canvasContext.beginPath();
        if (this.head)
            canvasContext.fillStyle = "#0DC63F";
        else
            canvasContext.fillStyle = "#8DC63F";
        canvasContext.lineWidth = 1;
        canvasContext.fillRect(this.x * SnakePart.PixelPerPoint + 1, this.y * SnakePart.PixelPerPoint + 1, SnakePart.PixelPerPoint, SnakePart.PixelPerPoint);
        canvasContext.strokeStyle = "#000000";
        canvasContext.rect(this.x * SnakePart.PixelPerPoint + 1, this.y * SnakePart.PixelPerPoint + 1, SnakePart.PixelPerPoint, SnakePart.PixelPerPoint);
        canvasContext.stroke();
    };
    SnakePart.PixelPerPoint = 20;
    return SnakePart;
}());
exports.SnakePart = SnakePart;
