function Player(name) {
	this.name = name;
}

function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function(){
	if(this.player1.pick === this.player2.pick){
		return null;
	}
	else if(this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) === -1 ){
		return this.player2;
	}

	else{
		return this.player1;
	}
}

Game.prototype.PAIRS = {
	'rock' : { 'beats' : [ 'lizard' , 'scissors' ] },
 	'paper' : { 'beats' : ['spock' , 'rock'] },
 	'scissors' : { 'beats' : ['lizard' , 'paper'] },
 	'lizard' : { 'beats' : ['spock' , 'paper'] },
 	'spock' : { 'beats' : ['rock' , 'scissors'] },
}

Player.prototype.picks = function(pick){
	this.pick = pick;
}

Game.prototype.samePick = function(){
	return this.player1.pick === this.player2.pick;
}
