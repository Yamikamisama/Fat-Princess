///////////////////////
///   Sound Files   ///
///////////////////////

var nomCake = new Audio('cakenom.wav');
var nomCarrot = new Audio('ew.wav');


///////////////////////////
///    Game Creation    ///
///////////////////////////


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
  this.cake = [new Cake(600, 600)];
  this.carrot = [new Carrot(200, 200)];
  this.score = new Score(this.$scorebar);
}

Game.prototype.loop = function() {
  this.princess.move();
  this.princess.eatCake(this.cake[0],  this.score);
  this.princess.eatCarrot(this.carrot[0],  this.score);
}
