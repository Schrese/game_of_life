import React from 'react';

const Rules = () => {
    return(
        <div>
            <h4>Rules of the Game</h4>
            <h6>1: Any living cell that has 2 or 3 neighbors stays alive</h6>
            <h6>2: Any dead cell that has exactly 3 neighbors is "born"</h6>
            <h6>3: Any cells that don't meet rules 1 or 2 will be dead in the next generation</h6>
        </div>
    )
}

export default Rules;
