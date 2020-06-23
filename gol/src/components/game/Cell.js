import React from 'react';
import styled from 'styled-components';

const Cell = ({ ind_cell, setGrid }) => {
    console.log(ind_cell, 'from cell.js')
    return(
        <OneCell>
            
        </OneCell>
    )
}

export default Cell;

const OneCell = styled.div`
    background: pink;
    width: 1rem;
    height: 1rem;
    cursor: pointer
`