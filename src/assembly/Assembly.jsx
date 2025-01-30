import './Assembly.css';
import Header from './components/Header';
import Main from './components/Main';
import { LanguagesContext } from './Context';
import { languages } from './assets/languages';
import { useState } from 'react';


const mainLang = 'RU'

const Assembly = () => {
    const [LANG, setLANG] = useState(mainLang);
    
    return (
        <div className="assembly">
            <LanguagesContext.Provider value={{languages, mainLang: LANG}}>
                <Header />
                <Main />
            </LanguagesContext.Provider>
        </div>
    );
}

export default Assembly;