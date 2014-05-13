function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.samePick = function() {
	return this.player1.pick === this.player2.pick;
}

Game.prototype.playerOneHasLost = function() {
	return this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) === -1;
}

Game.prototype.winner = function(){
	if(this.samePick()) {
		return null;
	}
	else if(this.playerOneHasLost()) {
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