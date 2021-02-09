import React from 'react';

const Cell = ({ ind_cell, index, setGrid, lifeToggler, cellShape, rows }) => {
    return(
        <div className='cell-games' onClick = {() => lifeToggler(ind_cell)} 
        style={{
            background: ind_cell.isAlive === true ? '#EEEEEE' : '#999999', 
            borderRadius: cellShape ? '0px' : '50px', 
            // height: rows === 25 ? '1.5rem' : 
            // rows === 30 ? '1.4rem' : '1rem',
            // width: rows === 25 ? '1.5rem' : 
            // rows === 30 ? '1.4rem' : '1rem'
            }} >
        </div>
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
