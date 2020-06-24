import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Cell from './Cell.js'

// Cell Class
// has properties: id, row, col, alive, 
class EachCell {
    constructor(id, row, col, isAlive) {
        this.id = id
        this.row = row
        this.col = col
        this.isAlive = isAlive
    }
}


const Grid = () => {
    const [rows, setRows] = useState(25)
    const [grid, setGrid] = useState([])

    useEffect(() => {
    // function to create rows/columns/cells
        function generateCells(n) {
            let gen_id = 0
            let newCell
            let arr = []
            for (let i = 1; i <= n; i++){
                for (let j = n; j > 0; j--) {
                    gen_id += 1
                    newCell = new EachCell(gen_id, i, j, false)
                    arr.push(newCell)
                }
            }
            return setGrid(arr)
        }
        generateCells(rows)
    }, [rows, setGrid])


    const lifeToggler = (obj) => {
        obj.isAlive = !obj.isAlive
        let ind = obj.id
        setGrid([...grid])
    }

    console.log(grid)

    return(
        <div className = 'secondary_container'>
            <h4>This Will be the Grid</h4>
                <GridContainer className = 'grid_container'>
                    {grid ? grid.map((g, i) => (
                        <Cell key = {g.id} ind_cell = {g} index = {i} lifeToggler = {lifeToggler}/>
                    )) : null}

            </GridContainer>
        </div>
    )
}

export default Grid;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(25, 0fr);
    justify-content: center;
    padding: 10px;
`

