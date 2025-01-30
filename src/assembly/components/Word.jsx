import { useContext } from "react";
import { WordContext, SelectedCharsContext } from "../Context";
import clsx from "clsx";

/* eslint-disable react/prop-types */
const Word = ({gameStatus}) => {
  const currentWord = useContext(WordContext);
  const selectedChars = useContext(SelectedCharsContext);
  
  const letterElements = currentWord.split('').map((letter, index) => {
    return (
    <span 
      key={index} 
      className={clsx({
        "word-letter": true,
        'unguessed-letter': gameStatus === 'lose' && !selectedChars.has(letter), 
        })}>
        {selectedChars.has(letter) || gameStatus === 'lose' ? letter : ''}
    </span>
    )
  });

    return (
      <section className="word">
        {letterElements}
      </section>
    );
}
  
  export default Word;