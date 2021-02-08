import React from 'react';

const Pregens = ({ changeRows, koksGalaxy, pentadecathlon, simpleGlider, shortLine, longLine, generatePreset }) => {

    return(
        <div className = 'presets'>
            <button onClick = {() => generatePreset(koksGalaxy)}>Kok's Galaxy</button>
            <button onClick = {() => generatePreset(pentadecathlon)}>pentadecathlon</button>
            <button onClick = {() => generatePreset(simpleGlider)}>Simple Glider</button>
            <button onClick = {() => generatePreset(shortLine)} >Short Line</button>
            <button onClick = {() => generatePreset(longLine)}>Long Line</button>
            <form>
                <label>Size: </label>
                <select name = 'r' onChange = {changeRows}>
                    <option value = '25'>25</option>
                    <option value = '30'>30</option>
                    <option value = '40'>40</option>
                    <option value = '50'>50</option>
                </select>
            </form>
        </div>
    )
}

export default Pregens;
