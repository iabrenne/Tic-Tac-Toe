var findNextEnabledButton = () => {    
    
    var buttons;
    
    buttons = $(".tic-tac-toe-btn");
    
        for (button in buttons ) {
                
    
            if  ( buttons[button].disabled == false) return buttons[button];
    
        }
};


// Check if computer has already claimed 2 buttons out of any winning 
// combination and 3rd button is still blank.  If so, return the blank
// button so that it can be clicked as a winning move for the computer.
var findWinningButton =() => {

    return findButtonToCompleteWinningCombo(xOrOTurn)

};



// Check if human player has already claimed 2 buttons out of any winning 
// combination and 3rd button is still blank. If so, block it to prevent
//human player from winning.

var findBlockingButton =() => {
    
    return findButtonToCompleteWinningCombo(userxOrO)
    
    };



var findButtonToCompleteWinningCombo = (checkXOrY) => {    
    
    var i, j, combo, numOfClaimedButtonsinWinningCombo, 
        numOfUnclaimedButtonsInWinningCombo, curBtnId, blankBtnId;

    for (i=0; i<winningCombos.length; i++) {
        
        combo = winningCombos[i];

        numOfButtonsInWinningComboHeldByComputer = 0;
        numOfUnclaimedButtonsInWinningCombo = 0;
        numOfClaimedButtonsinWinningCombo = 0;
        curBtnId = 0;
        blankBtnId = 0;

        for ( j=0; j<combo.length; j++ ) {

            curBtnId = "#button-" + combo[j];
            if ($(curBtnId).text() == checkXOrY)
                numOfClaimedButtonsinWinningCombo ++ ; 
    
            else if ($(curBtnId).text() == "") {
                numOfUnclaimedButtonsInWinningCombo++;
                blankBtnId = "#button-" + combo[j];                
            } 
        };
        
        if (numOfClaimedButtonsinWinningCombo == 2 &&
            numOfUnclaimedButtonsInWinningCombo == 1)
                return $(blankBtnId);
    }; 
    
};


var nextButtonToClick = () => {

    var winButton, blockButton;
    
    winButton = findWinningButton();
    if (winButton) return winButton;

    blockButton=findBlockingButton()
    if (blockButton) return blockButton;


    return findNextEnabledButton();


};