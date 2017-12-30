function delay(t){
    return new Promise(function(resolve){
      return setTimeout(resolve, t)
    });
  }

var clearRadioButtons = () => {

    $("#user-x").prop('checked',false);
    $("#user-y").prop('checked',false);

};

var showStartOver = () => $("#button-div").css("display","block"); 

var showGrid = () => $("#tic-tac-toe-grid").css("display","block");

var showPicker = () => $("#pic-x-or-o").css("display","block");

var hideGrid = () => $("#tic-tac-toe-grid").css("display","none"); 

var hidePicker = () => $("#pic-x-or-o").css("display","none"); 

var hideWinAnnounce = () => $("#announce-winner").css("display","none"); 

var hideStartOver = () => $("#button-div").css("display","none"); 

var communicateGameOver = (myWinningInfo) => {  
    
        myWinner = myWinningInfo.winner;
        
        myWinningInfo.combo.forEach( value => {

            $(`#button-${value}`).css("color","red");

        });

        delay(2000).then(reset);

        $("#announce-winner").css("display","block");
        $("#announce-winner>h2").text((myWinner == "tie") ? "Tie!" : myWinner + " won!");


        delay(2000).then(hideWinAnnounce);     
     
        showGrid();
        
};

var xOrOChoiceMade = (event) => {
    
    userxOrO = event.target.value;     
    xOrOTurn =  userxOrO;

    hidePicker();

    showGrid();   
    showStartOver();      
    
};


var reset = () => {
     

        hideWinAnnounce();  

        hideGrid();

        window.clearTimeout(intervalNextRound);


        var buttons = $(".tic-tac-toe-btn");
    

    
        for (button in buttons ) {
    
            
            buttons[button].innerText = "";
            buttons[button].disabled =  false ;
    
        }
    
        numOfClickedButtons = 0;
    
};

    
var startOver = () => {

        userStartedOver = true;
    
        reset();

        clearRadioButtons();
        
        showPicker();
        

    
    
};
