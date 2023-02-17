

//if user click the help button, this will be displayed
function Help(){
    return <div id="help">
        <p>This edition of the Hangman game uses only Spanish speaking countries. To play, simply start pressing on the letters that you think the hidden word contains. 
            If it is correct, it will display on their corresponding positions within the word. Otherwise, you will see a wrong letter section where the incorrect letter entered will be displayed.
            You only have 6 attemps. To reset the game, please refresh the page.
            <br></br>
            GOOD LUCK!
        </p>
        
    </div>
}

export default Help;
