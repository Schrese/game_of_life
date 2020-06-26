import React from 'react';
import styled from 'styled-components';

const Cell = ({ ind_cell, index, setGrid, lifeToggler, cellShape, rows }) => {
    // console.log(ind_cell,'from cell.js')
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
            {/* <p>id: {ind_cell.id}</p> */}
            {/* <p>col: {ind_cell.col}</p>
            <p>row: {ind_cell.row}</p>
            <p>test: {ind_cell.id}</p> */}
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
    // background: pink;
    // width: 1rem;
    // height: 1rem;
    cursor: pointer;
    border: 1px solid #38473A;
    // border-radius: 50px;
    box-shadow: 5px 10px #1B2C8F;

`