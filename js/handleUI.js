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

var communicateGameOver = (gameOverText) => {  
    
    reset();
    hideGrid();

    $("#announce-winner").css("display","block");
    $("#announce-winner>h2").text(gameOverText);

    intervalNextRound = setTimeout(()=> {

        hideWinAnnounce();
        showGrid();
        

    }, 5000);
        
};

var xOrOChoiceMade = (event) => {
    
    userxOrO = event.target.value;     
    xOrOTurn =  userxOrO;

    hidePicker();

    showGrid();   
    showStartOver();      
    
};


var reset = () => {
     
        // if user clicked start over while winner announcement was displaying, clear out winner announcement.
        // Also cancel the auto restart of the next round as user may want to change if they want to play as X or O

        hideWinAnnounce();        
        window.clearTimeout(intervalNextRound);

        hideGrid();

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
        
        showPicker();
        

    
    
};
