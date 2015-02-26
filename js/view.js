////////////////////////////
///   Initial Displays   ///
////////////////////////////

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

///////////////////////////
///   Grow and shrink   ///
///////////////////////////

Princess.prototype.princessGrow = function () {
  this.height += 20;
  this.width += 20;
  $('#princess').css({height: this.height, width: this.width});
  this.updateDisplay();
}

Princess.prototype.skinnyBooty = function () {
  this.height -= 20;
  this.width -= 20;
  $('#princess').css({height: this.height, width: this.width});
  this.updateDisplay();
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
};

////////////////////////////////
///   Actions for Objsects   ///
////////////////////////////////


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