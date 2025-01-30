import PLBoard from './PLBoard.jsx';
import Word from './Word.jsx';

/* eslint-disable react/prop-types */
const GameInfo = ({ gameStatus }) => {
    return (
      <section className='GameInfo'>
        <PLBoard />
        <Word gameStatus={gameStatus} />
      </section>
    );
  }
  
  export default GameInfo;