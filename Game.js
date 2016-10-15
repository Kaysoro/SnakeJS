"use strict";
var Snake_1 = require("./Snake");
var SnakePart_1 = require("./SnakePart");
var SnakeDirection_1 = require("./SnakeDirection");
var Food_1 = require("./Food");
var SpecialFood_1 = require("./SpecialFood");
var Animation_1 = require("./Animation");
var Game = (function () {
    function Game(canvas, speed, gridSize) {
        if (gridSize === void 0) { gridSize = SnakePart_1.SnakePart.PixelPerPoint; }
        this.canvas = canvas;
        this.speed = speed;
        this.gridSize = gridSize;
        this.animations = [];
        this.gridWidth = canvas.width / gridSize;
        this.gridHeight = canvas.height / gridSize;
        this.canvasContext = canvas.getContext("2d");
        this.score = 0;
        // listen to user interaction
        document.addEventListener("keydown", this.handleEvt.bind(this), false);
    }
    /**
     * Start game
     */
    Game.prototype.start = function () {
        //initialize game
        this.snake = new Snake_1.Snake(3, Math.round(this.gridWidth / 2), Math.round(this.gridHeight
            / 2));
        this.specialFood = new SpecialFood_1.SpecialFood(0, 0);
        this.specialFood.suppress();
        this.insertFood();
        this.animate(); // Start animation
    };
    Game.prototype.animate = function () {
        var fps = this.speed;
        var now;
        var then = Date.now();
        var interval = 1000 / fps;
        var delta;
        var animationLoop = (function () {
            if (!this.isGameOver) {
                requestAnimationFrame(animationLoop);
            }
            now = Date.now();
            delta = now - then;
            if (delta > interval) {
                then = now - (delta % interval);
                this.update();
            }
        }).bind(this);
        animationLoop();
    };
    /**
     * Update status of game and view
     */
    Game.prototype.update = function () {
        this.canvasContext.beginPath();
        this.canvasContext.fillStyle = "#F0F0F0";
        this.canvasContext.fillRect(0, 0, this.gridWidth * SnakePart_1.SnakePart.PixelPerPoint, this.gridHeight * SnakePart_1.SnakePart.PixelPerPoint);
        this.canvasContext.fillStyle = "#000000";
        this.canvasContext.lineWidth = 2;
        this.canvasContext.rect(0, 0, this.gridWidth * SnakePart_1.SnakePart.PixelPerPoint, this.gridHeight * SnakePart_1.SnakePart.PixelPerPoint);
        this.canvasContext.stroke();
        this.snake.move(this.gridWidth, this.gridHeight);
        if (this.foodEated()) {
            this.animations.push(new Animation_1.Animation(this.food.x, this.food.y, false));
            this.score += this.food.score;
            this.snake.grow();
            this.insertFood();
        }
        if (this.specialFoodEated()) {
            this.animations.push(new Animation_1.Animation(this.specialFood.x, this.specialFood.y, true));
            this.score += this.specialFood.score;
            this.snake.grow();
            this.snake.grow();
            this.snake.grow();
            this.snake.grow();
            this.snake.grow();
            this.specialFood.suppress();
        }
        if (!this.specialFood.create && Math.random() > 0.995)
            this.insertSpecialFood();
        this.specialFood.trySuppress();
        for (var _i = 0, _a = this.animations; _i < _a.length; _i++) {
            var anim = _a[_i];
            anim.draw(this.canvasContext);
        }
        this.cleanAnimations();
        this.food.draw(this.canvasContext);
        this.specialFood.draw(this.canvasContext);
        this.snake.draw(this.canvasContext);
        // Score
        this.canvasContext.beginPath();
        this.canvasContext.lineWidth = 1;
        this.canvasContext.fillStyle = "#000000";
        this.canvasContext.font = "30px Arial";
        this.canvasContext.strokeText("Score : " + this.score, this.gridWidth * SnakePart_1.SnakePart.PixelPerPoint - 150, this.gridHeight * SnakePart_1.SnakePart.PixelPerPoint - 15);
        this.canvasContext.stroke();
    };
    Game.prototype.handleEvt = function (e) {
        if (e) {
            switch (e.which) {
                case 37:
                    this.snake.direction = SnakeDirection_1.SnakeDirection.LEFT;
                    break;
                case 38:
                    this.snake.direction = SnakeDirection_1.SnakeDirection.UP;
                    break;
                case 39:
                    this.snake.direction = SnakeDirection_1.SnakeDirection.RIGHT;
                    break;
                case 40:
                    this.snake.direction = SnakeDirection_1.SnakeDirection.DOWN;
                    break;
                default:
                    this.snake.direction = SnakeDirection_1.SnakeDirection.NONE;
                    break;
            }
        }
    };
    Game.prototype.cleanAnimations = function () {
        var now = Date.now();
        this.animations.reverse();
        for (var _i = 0, _a = this.animations; _i < _a.length; _i++) {
            var anim = _a[_i];
            if (now - anim.time > Animation_1.Animation.TIME)
                this.animations.pop();
        }
        this.animations.reverse();
    };
    Game.prototype.foodEated = function () {
        var x = this.snake.parts[this.snake.parts.length - 1].x;
        var y = this.snake.parts[this.snake.parts.length - 1].y;
        return x == this.food.x && y == this.food.y;
    };
    Game.prototype.specialFoodEated = function () {
        var x = this.snake.parts[this.snake.parts.length - 1].x;
        var y = this.snake.parts[this.snake.parts.length - 1].y;
        return x == this.specialFood.x && y == this.specialFood.y;
    };
    Game.prototype.insertFood = function () {
        while (true) {
            var x = Math.round(Math.random() * this.gridWidth);
            var y = Math.round(Math.random() * this.gridHeight);
            for (var _i = 0, _a = this.snake.parts; _i < _a.length; _i++) {
                var part = _a[_i];
                if (part.x == x && part.y == y)
                    break;
            }
            if (this.specialFood.x != x && this.specialFood.y != y)
                break;
        }
        this.food = new Food_1.Food(x, y);
    };
    Game.prototype.insertSpecialFood = function () {
        while (true) {
            var x = Math.round(Math.random() * this.gridWidth);
            var y = Math.round(Math.random() * this.gridHeight);
            for (var _i = 0, _a = this.snake.parts; _i < _a.length; _i++) {
                var part = _a[_i];
                if (part.x == x && part.y == y)
                    break;
            }
            if (this.food.x != x && this.food.y != y)
                break;
        }
        this.specialFood = new SpecialFood_1.SpecialFood(x, y);
    };
    return Game;
}());
exports.Game = Game;
