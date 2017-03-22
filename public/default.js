// Set up game board
var initGame = function () {
    var cfg = {
        draggable: true,
        position: 'start',
        onDrop: handleMove,
    };

    board = new ChessBoard('gameBoard', cfg);
    game = new Chess();
}

// Set up socket client
var socket = io();

// Check for valid move then emit the move
var handleMove = function(source, target) {
    var move = game.move({from: source, to: target});

	if(move === null){
		console.log('Invalid move, snapping back');
		return 'snapback';
	}
	else{
		console.log('Valid move!');
		socket.emit('move', move);
	}
}

// called when the server calls socket.broadcast('move')
socket.on('move', function (msg) {
    game.move(msg);
    board.position(game.fen()); // fen is the board layout
});

initGame();
