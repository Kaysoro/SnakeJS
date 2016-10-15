"use strict";
(function (SnakeDirection) {
    SnakeDirection[SnakeDirection["NONE"] = 1] = "NONE";
    SnakeDirection[SnakeDirection["UP"] = 2] = "UP";
    SnakeDirection[SnakeDirection["DOWN"] = 3] = "DOWN";
    SnakeDirection[SnakeDirection["LEFT"] = 4] = "LEFT";
    SnakeDirection[SnakeDirection["RIGHT"] = 5] = "RIGHT";
})(exports.SnakeDirection || (exports.SnakeDirection = {}));
var SnakeDirection = exports.SnakeDirection;
