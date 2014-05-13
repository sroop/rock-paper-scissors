function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.samePick = function() {
	return this.player1.pick === this.player2.pick;
}

Game.prototype.PAIRS = {
	'rock' : { 'lizard' : 'crushes',   'scissors' : 'blunts' },
 	'paper' : { 'spock' : 'disproves' , 'rock' : 'covers' },
 	'scissors' : { 'lizard' : 'decapitate', 'paper' : 'cut' },
 	'lizard' : { 'spock' : 'poisons' , 'paper' : 'eats' },
 	'spock' : { 'rock' : 'vaporizes', 'scissors' : 'smashes' },
}

Game.prototype.victoryVerb = function(playerOnePick, playerTwoPick) {
	return this.PAIRS[playerOnePick][playerTwoPick]
}

Game.prototype.winner = function() {
	if(this.samePick()) {
		return null;
	}
	else if(this.victoryVerb(this.player1.pick, this.player2.pick)) {
		return this.player1;
	}
	else {
		return this.player2;
	}
}