import React from 'react';
import Rules from './game/Rules.jsx';
import Grid from './game/Grid.js';

const Game = () => {
    // Game component will be broken up into 2 parts. One side will be the rules, and the other side will be the game
    // I will need to set up 2 grids here, one that displays and the other that will be displayed next (or I can just make use of coppying one?)
    // I need to keep track of: 
        // whether the game is running or not
        // the displayed grid
        // the neighbors of a cell
        // whether the cell is alive or dead
        // what generation we're in
    // Components I'll need:
        // Cell.js 
            // just for how I display each cell
        // Grid.js
            // does most of the logic in here, this is where everything's displayed 
        // Inputs.js
            // this is what the user controls (start, stop, clicking on the cells(which might not be able to go into here))
        // possibly helper functions in a separate file 

    return(
        <div className = 'main_container'>
            {/* Made it here */}
            <Grid />
            <Rules />
        </div>
    )
}

export default Game;