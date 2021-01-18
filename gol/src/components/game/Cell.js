import React from 'react';
import styled from 'styled-components';

const Cell = ({ ind_cell, index, setGrid, lifeToggler, cellShape, rows }) => {
    return(
        <OneCell onClick = {() => lifeToggler(ind_cell)} 
        style={{
            background: ind_cell.isAlive === true ? 'blue' : 'pink', 
            borderRadius: cellShape ? '0px' : '50px', 
            height: rows === 25 ? '1.5rem' : 
            rows === 30 ? '1.4rem' : '1rem',
            width: rows === 25 ? '1.5rem' : 
            rows === 30 ? '1.4rem' : '1rem'
            }} >
        </OneCell>
    )
}

export default Cell;
// For testing smaller grids
// const OneCell = styled.div`
//     // background: pink;
//     width: 7rem;
//     height: 7rem;
//     cursor: pointer
// `

const OneCell = styled.div`
    cursor: pointer;
    border: 1px solid #38473A;
`