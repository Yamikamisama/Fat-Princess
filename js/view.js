
//

Cake.prototype.cakeDisplay = function() {
  this.$cake = $("<div class='cake'></div>")
  $('#arena').append(this.$cake);

  this.updateCakeDisplay();
}

Carrot.prototype.carrotDisplay = function() {
  this.$carrot = $("<div class='carrot'></div>")
  $('#arena').append(this.$carrot);

  this.updateCarrotDisplay();
}

Princess.prototype.initDisplay = function() {
  this.$princess = $("<div id='princess'></div>")
  $('#arena').append(this.$princess);

  this.updateDisplay();
}

Score.prototype.scoreDisplay = function() {
  this.$score = $("<div id='score'>POUNDS: "+this.pounds+"<br>LIVES: "+this.lives+"</div>")
  $('#scorebar').append(this.$score);
}

