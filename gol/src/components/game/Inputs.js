import React from 'react';
import styled from 'styled-components';

const Inputs = ({ playToggle, clearer, rows, randomCells, changeRows, generation, cellShapeToggle, grid, koksGalaxy, pentadecathlon, simpleGlider, shortLine, longLine, generatePreset, generateGrid2 }) => {

    return(
        <div className = 'input_container'>
                <Button onClick = {() => generatePreset(koksGalaxy)}>Kok's Galaxy</Button>
                <Button onClick = {() => generatePreset(pentadecathlon)}>pentadecathlon</Button>
                <Button onClick = {() => generatePreset(simpleGlider)}>Simple Glider</Button>
                <Button onClick = {() => generatePreset(shortLine)} >Short Line</Button>
                <Button onClick = {() => generatePreset(longLine)}>Long Line</Button>
                <Button onClick = {() => playToggle()}>Play/Pause</Button>
                <Button onClick = {() => clearer(rows)}>Clear</Button>
                <Button onClick = {() => randomCells(rows)}>Random</Button>
                <Button onClick = {() => cellShapeToggle()}>Circle/Square</Button>
                <form>
                    <Label>Size</Label>
                    <Select name = 'r' onChange = {changeRows}>
                        <Option value = '25'>25</Option>
                        <Option value = '30'>30</Option>
                        <Option value = '40'>40</Option>
                        <Option value = '50'>50</Option>
                    </Select>
                </form>
                <Button onClick = {() => generateGrid2(grid)}>Next Gen</Button>
            <h2>Generation: {generation} </h2>
        </div>
    )
}

export default Inputs;

const Button = styled.button`
    width: 14rem;
    height:3rem;
    margin: 6% 1%;
    border-radius: 15px;
    font-weight: bold;
    cursor: pointer;
    text-shadow: 0.5px 0.5px black;

    :hover {
        background: lightgrey;
    }
`

const Select = styled.select`
    width: 10rem;
    height: 3rem;
    border-radius: 15px;
    font-weight: bold;
    cursor: pointer;
    text-shadow: 0.5px 0.5px black;
`

const Label = styled.label`
    font-weight: bold;
    text-shadow: 0.5px 0.5px black;
`

const Option = styled.option`
    font-weight: bold;
    color: #5F4B8BFF;
    text-shadow: 0.5px 0.5px black;
`
