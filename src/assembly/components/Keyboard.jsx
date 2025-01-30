import clsx from 'clsx';
import { WordContext, SelectedCharsContext } from '../Context';
import { useContext } from 'react';

/* eslint-disable react/prop-types */
const Keyboard = ({ selectCharHandler, isPlaying, alphabet }) => {
    const word =  useContext(WordContext);
    const selectedChars = useContext(SelectedCharsContext)
    
    const onKeyPress = (event) => {
        let char = event.target.textContent;
        selectCharHandler(char)
    }
    
    const keyElements = alphabet.split('').map((char, index) => {
        const className = clsx(
            "keyboard-char", 
            selectedChars.has(char) && (word.includes(char) ? 'keyboard-char--matched' : 'keyboard-char--selected')
        )
        
        return <button 
            key={char} 
            className={className}
            onClick={onKeyPress}
            disabled={!isPlaying}
            aria-disabled={selectedChars.has(char)}
            aria-label={`Letter ${char}`}>
                {char}
        </button>
    })
  
    return (
      <section className="keyboard">
        {keyElements}
      </section>
    );
}
  
export default Keyboard;