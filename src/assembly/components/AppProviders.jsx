/* eslint-disable react/prop-types */
import { WordContext, SelectedCharsContext, AttemptsLeftContext } from "../Context"

const AppProviders = ({ children, currentWord, selectedChars, attemptsLeft }) => {
    return (
        <AttemptsLeftContext.Provider value={attemptsLeft}>
            <WordContext.Provider value={currentWord} >
                <SelectedCharsContext.Provider value={selectedChars} >
                    {children}
                </SelectedCharsContext.Provider>
            </WordContext.Provider>
        </AttemptsLeftContext.Provider>
        
    )
}

export default AppProviders;