console.log("connected");
//selecting player one button

var playerOne = document.querySelector("#player1");
var playerTwo = document.querySelector("#player2");
var resetButton = document.querySelector("#reset");
var playerOneDisplay = document.querySelector("#player1Display");
var playerTwoDisplay = document.querySelector("#player2Display");
var numInput = document.querySelector("input[type='number']")/*because theri can be other inputs that why we make the typ = number
numInput eken karane input field eka select karana eka value eka nwei so ekata*/
var winningScoreDisplay = document.querySelector("p span"); // selecting another way the span tag without and id

var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var winningScore = 5;

//------------------------------------
/*
    when we clock the player one btn it should increase the counter
     number for that we need to create a variable
*/ 
playerOne.addEventListener("click",function () {
    if (!gameOver) {
        player1Score++;
            if (player1Score === winningScore) {
                playerOneDisplay.classList.add("winner");//class ekak ad karane js behaviour wlata classlist.add use karala
                gameOver = true;
            }

        playerOneDisplay.textContent = player1Score; 
    }
    
    /* above code only execute game over welaa ntnm === !gameOver
        game over wela ntnm socore increase karaki but
        winning socore ekata yanakn pamanai
        dinamaa game over true wela variable eke state maru wena nisa true nisa code eka execute wene natha
    */
    
});

playerTwo.addEventListener("click", function () {
    if (!gameOver) {
        player2Score++;
            if (player2Score === winningScore) {
                playerTwoDisplay.classList.add("winner")//class ekak ad karane js behaviour wlata classlist.add use karala
                gameOver = true;
                
            }
        playerTwoDisplay.textContent = player2Score;
    }
   
    
});

/*when reset happends few things need to happends
1.playerOneScore and playerTwoScore variables need to reset to 0
2.values that display must me reset to 0 respected to playres
3.remove the green classs which ever elements is on
4.game over need go back change the state to false to run this code again */

resetButton.addEventListener("click", function () {
   reset();


});
//-----------------code refactering by defining a function----------------------------------------------------------
    function reset() {
        player1Score = 0;
        player2Score = 0;
        playerOneDisplay.textContent = 0;
        playerTwoDisplay.textContent = 0;
        playerOneDisplay.classList.remove("winner");
        playerTwoDisplay.classList.remove("winner");
        gameOver = false;
    }

//-------------------------------------------------------------------------------------------
/*we want update number that display
and we want to update winning score also

*/
numInput.addEventListener("change",function () {
  winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value) ; // this is how convert it to sting
  /* when we change the input palying number int compare with the strings so we cant use string camparsion with
  === so we need
  1. change that to string 
  2. shift to == */

  /* when we are playing if the winning score change we want to reset it so we 
  above created function is going to called here */
  reset();
    
});