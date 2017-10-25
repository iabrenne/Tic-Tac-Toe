var flipXOOX = () => (xOrOTurn == "X") ? xOrOTurn = "O" : xOrOTurn = "X";


var move = (event) => {


    // do not let human player click for the computer 

    if (!computer && xOrOTurn != userxOrO)
    
        return;

    numOfClickedButtons ++ ;
    
    $('#' + event.target.id ).text(xOrOTurn);

    $('#' + event.target.id ).attr("disabled", true);

    flipXOOX();

    if (computer) computer = false;


}   

var whoWon = () => {

    for (i=0; i<winningCombos.length; i++){

        var combo = winningCombos[i];

        if ($("#button-" + combo[0]).text() != "" 
            &&  $("#button-" + combo[0]).text() == $("#button-" + combo[1]).text()  
            &&  $("#button-" + combo[1]).text() == $("#button-" + combo[2]).text() )
           
                return $("#button-" + combo[0]).text();


    };

    return "noone";
};


var gameOverCheck = () => {

    var winner = whoWon();

    if ( winner != "noone") {

        communicateGameOver(winner + " won!");

        reset();

        
    }

    
    else if (numOfClickedButtons == 9 ) {


       communicateGameOver("Tie!");


       reset();
 

    }
    

   
}

var gameOverCheckIntervalID = window.setInterval(gameOverCheck, 1000);

var findNextEnabledButton = () => {


    var buttons = $(".tic-tac-toe-btn");
    
        for (button in buttons ) {
                
    
            if  ( buttons[button].disabled == false) return buttons[button];
    
        }


}

var nextMove = () => {

   
    // if users turn get out of here. This logic is for computer move only //

    if (userxOrO == xOrOTurn ) return;


    computer = true;

    // replace this function with something more intelligent 

    findNextEnabledButton().click();

}

var nextMoveCheckIntervalID = window.setInterval(nextMove, 1000);


