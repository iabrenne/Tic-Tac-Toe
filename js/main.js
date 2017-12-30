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
            &&  $("#button-" + combo[1]).text() == $("#button-" + combo[2]).text() ) {

                var winner = $("#button-" + combo[0]).text();
                return { "winner" : winner, "combo" : combo };
                
            }   
    };

    return { "winner":"noone" };
};


var gameOverCheck = () => {


    var winningInfo = whoWon();

    if ( winningInfo.winner != "noone") {

        communicateGameOver(winningInfo);
        
    }

    
    else if (numOfClickedButtons == 9 ) {

    
        communicateGameOver( {"winner" : "tie"} );
 

    }

    else nextMove();
    
     

};
   


var gameOverCheckIntervalID = window.setInterval(gameOverCheck, 1000);


var nextMove = () => {

   
    // if users turn get out of here. This logic is for computer move only 

    if (userxOrO == xOrOTurn ) return;


    computer = true;

    // replace this function with something more intelligent 

    nextButtonToClick().click();  
    

};




