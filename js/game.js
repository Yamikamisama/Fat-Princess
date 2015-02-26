

Princess.prototype.eatCake = function (cake,score) {
  if (Math.sqrt(Math.pow((this.x-cake.x),2)+Math.pow(this.y-cake.y,2)) < (cake.width+this.width)/2)
    {
    nomCake.play();
    cake.x = Math.floor(Math.random() * 600) + 100//Math.random()*600;
    cake.y = Math.floor(Math.random() * 600) + 100//Math.random()*600;
    this.princessGrow();
    cake.updateCakeDisplay();
    score.pounds+=100;
    score.updateScore();
    console.log("cake eaten");
    }
  console.log("im eating cakes");
}

Princess.prototype.eatCarrot = function (carrot,score) {
  if (Math.sqrt(Math.pow((this.x-carrot.x),2)+Math.pow(this.y-carrot.y,2)) < (carrot.width+this.width)/2)
    {
    nomCarrot.play();
    carrot.x = Math.floor(Math.random() * 600) + 100
    carrot.y = Math.floor(Math.random() * 600) + 100
    this.skinnyBooty();
    score.pounds-=100;
    score.lives-=1;
    if (score.lives==0) {
      alert("My anaconda don't want none unless...");
    }
    score.updateScore();
    carrot.updateCarrotDisplay();
    }
}



Princess.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.dir) {
    case 'right':
      this.x += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'up':
      this.y -= this.speed;
      break;
    case 'down':
      this.y += this.speed;
      break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
    if (! this.inBounds()) {
      if (this.$arena.width() < this.x + (this.width / 2)) {
        this.x = this.$arena.width() - (this.width / 2)
      }

      if ( 0 > this.x - (this.width / 2)) {
        this.x = (this.width / 2)
      }

      if (this.$arena.height() < this.y + (this.height / 2)) {
        this.y = this.$arena.height() - (this.height / 2)
      }

      if ( 0 > this.y - (this.height / 2)) {
        this.y = (this.height / 2)
      }
    }
  }
  this.updateDisplay();
}

///////////////////////
///   Sound Files   ///
///////////////////////

var nomCake = new Audio('cakenom.wav');
var nomCarrot = new Audio('ew.wav');

//////////////////
///   Bounds   ///
//////////////////

Princess.prototype.inBounds = function () {
  return (this.x > this.width / 2 && this.x < this.$arena.width() - this.width / 2 && this.y > this.height / 2 && this.y < this.$arena.height() - this.height / 2)
}

///////////////////////////
///   Display Updates   ///
///////////////////////////

Princess.prototype.updateDisplay = function () {
  this.$princess.css('top', this.y - this.height / 2);
  this.$princess.css('left', this.x - this.width / 2);
}

Cake.prototype.updateCakeDisplay = function () {
  this.$cake.css('top', this.y - this.height / 2);
  this.$cake.css('left', this.x - this.width / 2);
}

Carrot.prototype.updateCarrotDisplay = function () {
  this.$carrot.css('top', this.y - this.height / 2);
  this.$carrot.css('left', this.x - this.width / 2);
}

Score.prototype.updateScore = function(){
  console.log(this.pounds);
  $('#score').html("<div id='score'>POUNDS: "+this.pounds+"<br>LIVES: "+this.lives+"</div>");
  // this.$score.css("<div id='score'>POUNDS: "+this.pounds+"<br>LIVES: "+this.lives+"</div>")
  // $('#scorebar').html(this.$score);
};

///////////////////////////
///    Game Creation    ///
///////////////////////////

Game.prototype.loop = function() {
  this.princess.move();
  this.princess.eatCake(this.cake[0],  this.score);
  this.princess.eatCarrot(this.carrot[0],  this.score);
}

$(document).ready(function() {
  game = new Game();
  setInterval(function() { game.loop(); }, 20);

  ['left','right','up','down'].forEach(function(direction) {
    Mousetrap.bind(direction, function() {
      game.princess.dir = direction;
    });
  });
})

function Game() {
  this.$arena = $('#arena');
  this.$scorebar = $('#scorebar');
  this.princess = new Princess(this.$arena);
  this.cake = [new Cake(this.$arena, 600, 600)];
  this.carrot = [new Carrot(this.$arena, 200, 200)];
  this.score = new Score(this.$scorebar);
  // this.$carrots = [new Carrot(this.$arena)];
}
