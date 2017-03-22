var initGame = function () {
    var cfg = {
        draggable: true,
        position: 'start',
        onDrop: handleMove,
    };

    board = new ChessBoard('gameBoard', cfg);
    game = new Chess();
}

var handleMove = function(source, target) {
    var move = game.move({from: source, to: target});

	if(move === null){
		console.log('Invalid move, snapping back');
		return 'snapback';
	}
	else{
		console.log('Valid move!');
	}
}

initGame();
