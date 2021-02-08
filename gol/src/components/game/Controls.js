import React from 'react';

const Controls = ({ playToggle, clearer, rows, randomCells, changeRows, generation, cellShapeToggle, grid, generateGrid2 }) => {

    return (
        <div className = 'controls'>
            <div>
                <button onClick = {() => playToggle()}>Play</button>
                <button onClick = {() => clearer(rows)}>Clear</button>
                <button onClick = {() => randomCells(rows)}>Random</button>
                <button onClick = {() => cellShapeToggle()}>Circle/Square</button>
            </div>
            <div>
                <button onClick = {() => generateGrid2(grid)}>Next Gen</button>
                <h2>Generation: {generation}</h2>
            </div>
        </div>
    )
}

export default Controls;