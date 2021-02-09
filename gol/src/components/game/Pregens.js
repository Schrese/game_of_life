import React from 'react';

// Images
import koks_galaxy from '../../assets/koks_galaxy.svg';
import long_line from '../../assets/long_line.svg';
import pentadecathlon_img from '../../assets/pentadecathlon_img.svg';
import short_line from '../../assets/short_line.svg';
import simple_glider from '../../assets/simple_glider.svg';

// Components
import PregenButton from './PregenButton';

const Pregens = ({ changeRows, koksGalaxy, pentadecathlon, simpleGlider, shortLine, longLine, generatePreset, randomCells, rows }) => {

    return(
        <div className = 'presets'>
            <div onClick = {() => generatePreset(koksGalaxy)}>
                <PregenButton image = {koks_galaxy} text = "Kok's Galaxy" />
            </div>
            <div onClick = {() => generatePreset(pentadecathlon)}>
                <PregenButton image = {pentadecathlon_img} text = "Pentadecathlon" />
            </div>
            <div onClick = {() => generatePreset(simpleGlider)}>
                <PregenButton image = {simple_glider} text = "Simple Glider" />
            </div>
            <div onClick = {() => generatePreset(shortLine)}>
                <PregenButton image = {short_line} text = "Short Line" />
            </div>
            <div onClick = {() => generatePreset(longLine)}>
                <PregenButton image = {long_line} text = "Long Line" />
            </div>
            <div onClick = {() => randomCells(rows)}>
                <PregenButton image = {long_line} text = "Random" />
            </div>
            
            {/* <form>
                <label>Size: </label>
                <select name = 'r' onChange = {changeRows}>
                    <option value = '25'>25</option>
                    <option value = '30'>30</option>
                    <option value = '40'>40</option>
                    <option value = '50'>50</option>
                </select>
            </form> */}
        </div>
    )
}

export default Pregens;
