$(document).ready(function() {
	gameStatus = {
		player1_position: 0,
		player2_position: 0
	}
	winner = false;

	function update_player_position(player, position) {
		console.log("hi");
		td_elements = $("#" + player).children()
		$(td_elements[position-1]).addClass('active')
		gameStatus[player + '_position'] = position;
	}


	$(document).on('keyup', function(e) {
		e.preventDefault();
		var code = e.keyCode || e.which;

		if(code == 38){
			update_player_position('player1', gameStatus.player1_position+1);
		}

		else if(code == 40){
			update_player_position('player2', gameStatus.player2_position+1);
		}
		if(!winner){
			players = ['player1', 'player2']
			for(var i = 0;i < players.length;i++) {
				trackLength = $("#" + players[i]).children().length;
				position = gameStatus[players[i] + '_position'];
				if (position >= trackLength) {
					alert(players[i] + ' won!');
					winner = true;
				}
			}
		}
	});
});
