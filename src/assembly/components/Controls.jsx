/* eslint-disable react/prop-types */
const Controls = ({ isPlaying, goNew }) => {
    return (
      !isPlaying && 
        <section>
          <button 
            className="new-game-btn"
            onClick={goNew}>
                New Game
            </button>
        </section>
    );
  }
  
  export default Controls;