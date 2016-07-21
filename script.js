var whosTurn = 1; //Start off on pleyer ons turn


function markSquare(square){
	if(whosTurn == 1){
		square.innerHTML ='X';
		whosTurn = 2
	}
	else {
		square.innerHTML = 'O';
		whosTurn = 1;
	}
	console.log(square);
}