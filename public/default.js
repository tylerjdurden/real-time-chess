// Game logic

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

// Sockets

// setup my socket client
var socket = io();
$('#msgButton').on('click', function(e) {
	// someone clicked, so send a message
	socket.emit('message', 'hello world!');
});
initGame();
