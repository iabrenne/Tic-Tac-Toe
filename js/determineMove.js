var findNextEnabledButton = () => {    
    
    var buttons;
    
    buttons = $(".tic-tac-toe-btn");
    
        for (button in buttons ) {
                
    
            if  ( buttons[button].disabled == false) return buttons[button];
    
        }
};

// Check if computer has already claimed 2 buttons in a row and 3rd button is still blank.
// If so, return the blank button so that it can be clicked as a winning move for computer.

var findWinningButton = () => {    
    
    var i, j, combo, numOfButtonsInWinningComboHeldByComputer, 
        numOfUnclaimedButtonsInWinningCombo, currBtnId, blankBtnId;

    for (i=0; i<winningCombos.length; i++) {
        
        combo = winningCombos[i];

        numOfButtonsInWinningComboHeldByComputer = 0;
        numOfUnclaimedButtonsInWinningCombo = 0;
        currBtnId = 0;
        blankBtnId = 0;

        for ( j=0; j<combo.length; j++ ) {

            curBtnId = "#button-" + combo[j];
            if ($(curBtnId).text() == xOrOTurn)
                numOfButtonsInWinningComboHeldByComputer ++ ; 
    
            if ($(curBtnId).text() == "") {
                numOfUnclaimedButtonsInWinningCombo++;
                blankBtnId = "#button-" + combo[j];                
            } 
        };
        
        if (numOfButtonsInWinningComboHeldByComputer == 2 &&
            numOfUnclaimedButtonsInWinningCombo == 1)
                return $(blankBtnId);
    }; 
    
};


var nextButtonToClick = () => {

    var winButton;
    
    winButton = findWinningButton();
    if (winButton) return winButton;
    return findNextEnabledButton();


};