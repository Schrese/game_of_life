import React from 'react';

const Controls = ({ playToggle, clearer, rows, generation, cellShapeToggle, grid, generateGrid2 }) => {

    return (
        <div className = 'controls'>
            <div className = 'left'>
                <h2>Generation: {generation}</h2>
                <div>
                    <button onClick = {() => playToggle()}>Play</button>
                    <button onClick = {() => generateGrid2(grid)}>Next Gen</button>

                </div>

            </div>
            <div className = 'right'>
                <button onClick = {() => clearer(rows)}>Clear</button>
                <button className = 'circle-toggle' onClick = {() => cellShapeToggle()}>Circle</button>
            </div>



        </div>
    )
}

export default Controls;