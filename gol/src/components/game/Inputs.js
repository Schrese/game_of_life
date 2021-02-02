import React from 'react';

const Inputs = ({ playToggle, clearer, rows, randomCells, changeRows, generation, cellShapeToggle, grid, koksGalaxy, pentadecathlon, simpleGlider, shortLine, longLine, generatePreset, generateGrid2 }) => {

    return(
        <div>
                <button onClick = {() => generatePreset(koksGalaxy)}>Kok's Galaxy</button>
                <button onClick = {() => generatePreset(pentadecathlon)}>pentadecathlon</button>
                <button onClick = {() => generatePreset(simpleGlider)}>Simple Glider</button>
                <button onClick = {() => generatePreset(shortLine)} >Short Line</button>
                <button onClick = {() => generatePreset(longLine)}>Long Line</button>
                <button onClick = {() => playToggle()}>Play/Pause</button>
                <button onClick = {() => clearer(rows)}>Clear</button>
                <button onClick = {() => randomCells(rows)}>Random</button>
                <button onClick = {() => cellShapeToggle()}>Circle/Square</button>
                <form>
                    <label>Size</label>
                    <select name = 'r' onChange = {changeRows}>
                        <option value = '25'>25</option>
                        <option value = '30'>30</option>
                        <option value = '40'>40</option>
                        <option value = '50'>50</option>
                    </select>
                </form>
                <button onClick = {() => generateGrid2(grid)}>Next Gen</button>
            <h2>Generation: {generation} </h2>
        </div>
    )
}

export default Inputs;
