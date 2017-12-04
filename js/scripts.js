var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);


var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });


var gameState = 'notStarted',  
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };


    var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    compIsWinnerElem = document.getElementById("js-computerWinsElement");
    playerIsWinnerElem = document.getElementById("js-playerWinsElement");
    welcomeElem = document.getElementById('js-welcomeElement'); 
    resultsElem = document.getElementById('js-resultsTableElement');

    function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        welcomeElem.style.display = "none";
        compIsWinnerElem.style.display = "none";
        playerIsWinnerElem.style.display = "none";
        pickElem.style.display = 'block'; 
        resultsElem.style.display = 'block';
      break;
    case 'playerWins':
        newGameBtn.innerText = 'Play again';
    	newGameElem.style.display = 'none';
        welcomeElem.style.display = "none";
        compIsWinnerElem.style.display = "none";
        playerIsWinnerElem.style.display = "block";
        pickElem.style.display = 'none'; 
        resultsElem.style.display = 'block';
      break
    case "computerWins":
    	newGameBtn.innerText = 'Play again';
    	newGameElem.style.display = 'none';
        welcomeElem.style.display = "none";
        compIsWinnerElem.style.display = "block";
        playerIsWinnerElem.style.display = "none";
        pickElem.style.display = 'none'; 
        resultsElem.style.display = 'block';
      break
    

    case 'notStarted':
    	compIsWinnerElem.style.display = "block";
        playerIsWinnerElem.style.display = "block";
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
        compIsWinnerElem.style.display = "none";
        playerIsWinnerElem.style.display = "none";
  }

}

setGameElements();


var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();
    setGamePoints();
    playerNameElem.innerHTML = player.name;
  }

}


function playerPick(playerPick) {
    console.log(playerPick);
}

var x = Math.random();

Math.floor(Math.random()*3)

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}


var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; 
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = player.name + " wins!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Computer wins! Try again";
        computer.score++;
       
    }
    setGamePoints();
    
}





function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
    gameOver()
}


function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}



function gameOver() {

if (player.score == 10) {
    
    gameState = 'playerWins'
    
    setGameElements();
  }

  if (computer.score == 10) {
 	
 	gameState = 'computerWins'
 	setGameElements();
  }

  
}






