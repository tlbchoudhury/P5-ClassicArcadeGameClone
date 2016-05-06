// Enemies our player must avoid
var Enemy = function(x, y) {
    this.x = x;
    this.y = y;
    // Variables applied to each of our instances go here,

    // The image/sprite for our enemies, this uses
    // To easily load images a helper has been utelized
    this.sprite = 'images/enemy-bug.png';
    this.speed = 50 + Math.floor(Math.random() * 200);
};

// Updated enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;

    if (this.x > 500) {
        this.x = 0;
    }
    // Movements have been multiplied by the dt parameter
    // to ensure the game runs at the same speed for
    // all computers.
};

// The enemy on the screen is drawn, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class/constructor sets location and image for the player object
// This class requires an update(), render() and
// a handleInput() method.


var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';

};

//the If Statement checks if the player reaches water & sets the player to initial starting location after 0.5 sec
Player.prototype.update = function(dt) {
    if (player.y <= -9) {
        player.reset();
    }
};

//reset function sets the player to initial starting location after 0.5 sec
Player.prototype.reset = function() {
    setTimeout(function(){
        player.y = 405;
        player.x = 200;      
    }, 500);
}

// The player on the screen is drawn, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

//Moves the player up, down, left, & right based on user input.
Player.prototype.handleInput= function(key) {
    switch(key) {
        case "left":
            if (this.x > 0) 
                this.x = this.x - 100;
            break;
        case "up":
        if (this.y > 0)
            this.y = this.y - 83;
            break;
        case "right":
        if (this.x < 400)
            this.x = this.x + 100;
            break;
        case "down":
        if (this.y < 400)
            this.y = this.y + 83;
            break;
    }
};


// Place all enemy objects in an array called allEnemies

var enemy1 = new Enemy(-50, 225);
var enemy2 = new Enemy(-200, 145);
var enemy3 = new Enemy(-100, 60);
var allEnemies= [];
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3)

//Create player object with initial location
var player = new Player(200, 405);

// This listens for key presses and sends the keys to
// Player.handleInput() method. 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
