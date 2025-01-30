/* eslint-disable react/prop-types */
import GameStatus from "./GameStatus";
import GameInfo from "./GameInfo";
import Controls from "./Controls";
import Keyboard from "./Keyboard";
import { useCallback, useContext, useEffect, useState, useRef } from "react";
import AppProviders from "./AppProviders";
import { LanguagesContext } from "../Context";
import { getWord } from '../assets/words'


const Main = () => {
    const lang = useContext(LanguagesContext).mainLang;
    const languageList = useContext(LanguagesContext).languages;

    const totalAttempts = languageList.length - 1;
    const alphabet = lang === 'EN' ? "abcdefghijklmnopqrstuvwxyz" :
    'абвгдеёжзийклмнопрстуфхцчшщьъэюя';

    const [currentWord, setCurrentWord] = useState(() => getWord(lang));
    const [selectedChars, setSelectedChars] = useState(new Set());
    
    // derived values
    const attemptsLeft = totalAttempts - [...selectedChars].filter(char => !currentWord.includes(char)).length
    
    const allMatched = currentWord.split('').every(char => selectedChars.has(char));
    const gameOver = attemptsLeft <= 0;
    
    let gameStatus = 'playing';
    if (allMatched) gameStatus = 'win';
    if (gameOver && !allMatched) gameStatus = 'lose';

    console.log(currentWord);

    const selectCharHandler = useCallback((char) => {
        if (selectedChars.has(char)) {
            return
        } else {
            setSelectedChars(prevChars => {
                return new Set([...prevChars]).add(char)
            })
        }
    }, [selectedChars]);
    
    useEffect(() => {
        const keydownHandler = (e) => {
            const char = e.key;
            gameStatus === 'playing' && alphabet.includes(char) && selectCharHandler(char);
        }
        document.addEventListener('keydown', keydownHandler)
        return () => {
            document.removeEventListener('keydown', keydownHandler)
        }
    }, [selectCharHandler, gameStatus, alphabet])

    const startNewGame = () => {
        setCurrentWord(getWord(lang));
        setSelectedChars(new Set());
    }
    
    const languageToErase = languageList[languageList.length - attemptsLeft - 2]?.name
    
    return (
        <AppProviders 
            currentWord={currentWord}
            selectedChars={selectedChars}
            attemptsLeft={attemptsLeft} >
                <main>
                    <GameStatus 
                        gameStatus={gameStatus} 
                        languageToErase={languageToErase} />
                    <GameInfo gameStatus={gameStatus} />
                    <Keyboard 
                        selectCharHandler={selectCharHandler} 
                        isPlaying={gameStatus === 'playing'}
                        alphabet={alphabet} />
                    <Controls 
                        isPlaying={gameStatus === 'playing'}
                        goNew={startNewGame}
                    />
                </main>
        </AppProviders>
    );
}

export default Main;