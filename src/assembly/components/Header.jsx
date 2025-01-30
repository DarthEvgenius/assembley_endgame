import { useContext } from "react";
import { LanguagesContext } from "../Context";

const Header = () => {
  const lang = useContext(LanguagesContext).mainLang
  const attempts = useContext(LanguagesContext).languages.length - 1
  return (
    <header>
        <h1>Assembly Endgame</h1>
        {lang === 'EN' ? 
          <p>
            Guess the word within {attempts} attempts to keep the 
        programming world safe from Assembly!
        </p>
        : <p>
          Угадай слово с {attempts} попыток, чтобы уберечь мир от Ассемблера!
          </p>}
        
    </header>
  );
}

export default Header;