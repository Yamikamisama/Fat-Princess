
///////////////////
///   Objects   ///
///////////////////

function Princess(arena) {
  this.$arena = arena;
  this.x = this.$arena.width() / 2;
  this.y = this.$arena.height() / 2;
  this.dir = "sitting there like a fatass";
  this.speed = 5;
  this.height = 32;
  this.width = 32;
  this.initDisplay();
}

function Cake(arena, x, y) {
  this.$arena = arena;
  this.height = 34;
  this.width = 34;
  this.x = x+this.width/2;
  this.y = y+this.height/2;
  this.cakeDisplay();
}

function Carrot(arena, x, y) {
  this.$arena = arena;
  this.height = 34;
  this.width = 34;
  this.x = x+this.width/2;
  this.y = y+this.height/2;
  this.carrotDisplay();
}

function Score(scorebar) {
  this.$scorebar = scorebar;
  this.pounds = 200;
  this.lives = 3;
  this.scoreDisplay();
}