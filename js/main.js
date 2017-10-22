var userxOrO;

var xOrOTurn;

var computer;



var xOrOChoiceMade = (event) => {
    
    userxOrO = event.target.value;     
    xOrOTurn =  userxOrO;


    $("#pic-x-or-o").css("display","none");
    $("#tic-tac-toe-grid").css("display","block");            
    
    }   


var numOfClickedButtons = 0;



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



var communicateGameOver = (gameOverText) => { 
    
   
     alert(gameOverText);
    
    };



var reset = () => {
    
        
        var buttons = $(".tic-tac-toe-btn");
    
    
    
        for (button in buttons ) {
    
            
            buttons[button].innerText = "";
            buttons[button].disabled =  false ;
    
        }
    
        numOfClickedButtons = 0;
    
    };



var whoWon = () => {


    switch(true){


        // if buttons 1,2 and 3 have same value and value is not blank, someone won.

        case $("#button-1").text() == $("#button-2").text() && $("#button-2").text() == $("#button-3").text() && $("#button-1").text() != "" :

            return $("#button-1").text() ;

        

        // if buttons 3, 4 or 5 have same value and value is not blank, someone won.

        case $("#button-4").text() == $("#button-5").text() && $("#button-5").text() == $("#button-6").text() && $("#button-6").text() != "" :
        
            return $("#button-4").text() ;


        // if buttons 7, 8 or 9 have same value and value is not blank, someone won.

        case $("#button-7").text() == $("#button-8").text() && $("#button-8").text() == $("#button-9").text() && $("#button-9").text() != "" :
        
            return $("#button-7").text() ;


        default:

            return "noone";

    }

} ;



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



var intervalID = window.setInterval(gameOverCheck, 1000);




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

var setInterval = window.setInterval(nextMove, 1000);



$(document).ready( ()=> {





} );