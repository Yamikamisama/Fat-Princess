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
