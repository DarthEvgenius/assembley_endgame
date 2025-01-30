import clsx from "clsx";
import { languages } from "../assets/languages";
import { useContext } from "react";
import { AttemptsLeftContext } from "../Context";

/* eslint-disable react/prop-types */
const PLBoard = () => {
  const attemptsLeft = useContext(AttemptsLeftContext)
  
  const languageList = languages.map((language, index, arr) => (
    <li 
      key={language.name} 
      style={{ backgroundColor: language.backgroundColor, color: language.color }}
      className={clsx({
        "language-list-item": true,
        'lost': index < arr.length - attemptsLeft - 1
      })}>
      {language.name}
    </li>
  ));
  
    return (
      <section className="PLBoard">
        <ul className="language-list">
          {languageList}
        </ul>
      </section>
    );
  }
  
  export default PLBoard;