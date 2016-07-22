// N Sized version
var whosTurn = 1; //Start off on pleyer ons turn

var winners = [];
// 3.Build a winners array
// 2.We need to populate the board

var player1 =[];  //Array where we will stash the squares player has checked
var player2 = [];  // array for player 2
var someoneWon = false;


function whoPlays(){
document.getElementById('play1').addEventListener("click", function(){
		alert("You will play aginst the computer.");});


document.getElementById('play2').addEventListener("click", function(){
		var person1 = prompt("Enter the name of P1ayer 1");
		var person2 = prompt("Enter the name of P1ayer 2")
		document.getElementById('name1');
		document.getElementById('name2');
		name1.innerHTML = "Player 1 - " + person1;
		name2.innerHTML = "Player 2 - " + person2;
	});
}

whoPlays(); //call the function


function markSquare(square){
	if(someoneWon){
		console.log("Someone already won");
	}

	//check to see if this square is in either player array,
	//if so, goodbye
	else if((player1.indexOf(square.id) == -1) //Lok in player 1 array for the square
		&& (player2.indexOf(square.id) == -1)){ // look in player 2 array for the square
			//If both are -1, then it's neither array

		if(whosTurn == 1){
			square.innerHTML ='X';
			whosTurn = 2;
			player1.push(square.id);
			checkWin(player1,1);
		}
		else {
			square.innerHTML = 'O';
			whosTurn = 1;
			player2.push(square.id);
			checkWin(player2,2);
		}
	}
	else{
		console.log("Something is already there!!! No cheating!!");
	}
}


function checkWin(currentPlayersSquares, whoJustMarked){
	var rowCount = 0;
	// loop through the outter array
	for(var i = 0; i < winners.length; i++){
		//loop through the inner loop
		rowCount = 0;
		for(var j = 0; j < winners[i].length; j++){
			if(currentPlayersSquares.indexOf(winners[i][j]) > -1){
				//Hit!!
				rowCount++;
			}
			if(rowCount == 3){
				///BINGO!!
				gameOver(whoJustMarked, winners[i]);
			}
		}
	}
}


function gameOver(whoWon, winningCombo){
	document.getElementById('message');
	message.innerHTML = "Congratulations Player " + whoWon + 
	", You Won!! You won with  " + winningCombo.join(', ');

	for(var i = 0; i < winningCombo.length; i++){
		document.getElementById(winningCombo[i]).className += ' winner';
	}
	someoneWon = true;
}

function resetGame(){
   document.getElementById("game-wrapper").addEventListener.reset("click", 
   	function(){
		alert("Would you like to play again?");});
 } 



