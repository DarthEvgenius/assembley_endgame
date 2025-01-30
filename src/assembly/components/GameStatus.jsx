import clsx from "clsx";
import Confetti from 'react-confetti';
import { getFarewellText } from '../utils'
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const GameStatus = ({ gameStatus, languageToErase }) => {
    const [firewellText, setFirewellText] = useState(null);
    
    const className = clsx({
        'game-status': true,
        firewell: gameStatus === 'playing' && languageToErase,
        win: gameStatus === 'win',
        lose: gameStatus === 'lose'
    });

    useEffect(() => {
        setFirewellText(getFarewellText(languageToErase));
    }, [languageToErase])

    return (
        <section 
            className={className} 
            aria-live="polite"
            role="status"
        >
            { (gameStatus === 'playing' && languageToErase) && firewellText }
            {gameStatus === 'win' && 
                <>
                    <Confetti />
                    <Confetti />
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            }
            {gameStatus === 'lose' && 
                <>
                    <p>Better start learning Assembly 😭</p>
                    <h2>You lose!</h2>
                </>
            }
        </section>
    );
}

export default GameStatus;