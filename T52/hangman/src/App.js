import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show} from './check/checkWin';
import Help from './components/Help';

import './App.css';

//creating array of spanish-speaking countries
const words = [
  'colombia', 
  'spain', 
  'mexico', 
  'cuba', 
  'bolivia', 
  'peru',
  'ecuador',
  'venezuela',
  'argentina',
  'uruguay', 
  'chile'];

//generate random country for user to guess
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {

  //initialise states
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [needHelp, setNeedHelp] = useState(false);

  useEffect(() => {
    //function to check if letter pressed is included in the random word
    const handleKeydown = event => {
      const { key, keyCode } = event;

      //if game is still playable i.e.true AND keycode entered is a letter,
      //convert letter to lowercase 
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        //if lowered case letter is included in the random word, add letter to correctLetter state array
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
            //else change state of showNotification
          } else {
            show(setShowNotification);
          }

        //if lowered case letter is not included in the random word, add letter to wrongLetter state array
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }

    //event listener for pressing keys which triggers function above
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);


  //function to restart game
  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  const handleHelpClick = () => {
    setNeedHelp(true);
  }
  const handleNoHelpClick = () => {
    setNeedHelp(false);
  }

  //if user clicks help button this will be displayed
  if (needHelp) {
    return(
      <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />      
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
      <button className="helpBttn" onClick={handleNoHelpClick}>GOT IT!</button>
      <Help/>
      
      
      
    </>


    )
  }

  else {
    return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
      <button className="helpBttn" onClick={handleHelpClick}>HELP</button>
    </>
  );
  }
}

export default App;
