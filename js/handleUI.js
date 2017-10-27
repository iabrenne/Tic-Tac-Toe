var clearRadioButtons = () => {

    $("#user-x").prop('checked',false);
    $("#user-y").prop('checked',false);

};


var communicateGameOver = (gameOverText) => {  
    
   $("#tic-tac-toe-grid").css("display","none"); 
      
   $("#announce-winner").css("display","block");

        
};

var xOrOChoiceMade = (event) => {
    
    userxOrO = event.target.value;     
    xOrOTurn =  userxOrO;


    $("#pic-x-or-o").css("display","none");
    $("#tic-tac-toe-grid").css("display","block");    
    $("#button-div").css("display","block");        
    
};


var reset = () => {
    
    
        
        var buttons = $(".tic-tac-toe-btn");
    
    
    
        for (button in buttons ) {
    
            
            buttons[button].innerText = "";
            buttons[button].disabled =  false ;
    
        }
    
        numOfClickedButtons = 0;
    
};

    
var startOver = () => {
    
        reset();

        clearRadioButtons();
        
        $("#pic-x-or-o").css("display","block");
        $("#tic-tac-toe-grid").css("display","none"); 

    
    
};
