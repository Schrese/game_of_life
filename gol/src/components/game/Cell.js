import React from 'react';
import styled from 'styled-components';

const Cell = ({ ind_cell, index, setGrid, lifeToggler }) => {
    // console.log(ind_cell,'from cell.js')
    return(
        <OneCell onClick = {() => lifeToggler(ind_cell)} style={{background: ind_cell.isAlive == true ? 'blue' : 'pink' }} >
            <p>id: {ind_cell.id}</p>
            <p>col: {ind_cell.col}</p>
            <p>row: {ind_cell.row}</p>
        </OneCell>
    )
}

export default Cell;
// For testing smaller grids
const OneCell = styled.div`
    // background: pink;
    width: 7rem;
    height: 7rem;
    cursor: pointer
`

// const OneCell = styled.div`
//     // background: pink;
//     width: 1rem;
//     height: 1rem;
//     cursor: pointer
// `