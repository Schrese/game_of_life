import React from 'react';
import styled from 'styled-components';

const Inputs = ({ playToggle, clearer, rows, randomCells, changeRows, generation, cellShapeToggle }) => {

    return(
        <div>
            <Button onClick = {() => playToggle()}>Play/Pause</Button>
            <Button onClick = {() => clearer(rows)}>Clear</Button>
            <Button onClick = {() => randomCells(rows)}>Random</Button>
            <Button onClick = {() => cellShapeToggle()}>Circle/Square</Button>
            <form>
                <label>Size</label>
                <select name = 'r' onChange = {changeRows}>
                    <option value = '25'>25</option>
                    <option value = '30'>30</option>
                    <option value = '40'>40</option>
                    <option value = '50'>50</option>
                </select>
            </form>
            <h2>Generation: {generation} </h2>
        </div>
    )
}

export default Inputs;

const Button = styled.button`
    width: 15%;
    height: 15%;
`