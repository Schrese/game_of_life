import React from 'react';
import styled from 'styled-components';

const Cell = ({ ind_cell, setGrid, lifeToggler }) => {
    // console.log(ind_cell.id,'from cell.js')
    return(
        <OneCell onClick = {() => lifeToggler(ind_cell)} style={{background: ind_cell.isAlive == true ? 'blue' : 'pink' }} >
            
        </OneCell>
    )
}

export default Cell;

const OneCell = styled.div`
    // background: pink;
    width: 1rem;
    height: 1rem;
    cursor: pointer
`