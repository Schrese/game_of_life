import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Cell from './Cell.js';
import Inputs from './Inputs.js';

// Cell Class
// has properties: id, row, col, alive, 
class EachCell {
    constructor(id, row, col, isAlive, max) {
        this.id = id
        this.row = row
        this.col = col
        this.isAlive = isAlive
        this.max = max
        this.nw = id - max - 1
        this.n = id - max
        this.ne = id - max + 1
        this.e = id + 1
        this.se = id + max + 1
        this.s = id + max
        this.sw = id + max - 1
        this.w = id - 1
    }
}


const Grid = () => {
    const [rows, setRows] = useState(25)
    const [grid, setGrid] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [nextGrid, setNextGrid] = useState([])

    useEffect(() => {
    // function to create rows/columns/cells
        function generateCells(n) {
            let gen_id = 0
            let newCell
            let arr = []
            for (let i = 1; i <= n; i++){
                for (let j = n; j > 0; j--) {
                    gen_id += 1
                    newCell = new EachCell(gen_id, i, j, false, rows)
                    arr.push(newCell)
                }
            }
            return setGrid(arr)
        }
        generateCells(rows)
    }, [rows, setGrid])


    const lifeToggler = (obj) => {
        if (isPlaying === false) {
        obj.isAlive = !obj.isAlive
        let ind = obj.id
        setGrid([...grid])
        console.log(obj)
        }
    }

    const player = e => {
        setIsPlaying(!isPlaying)
    }

    function testing(arr) {
        let i = 0
        for(i in arr){
            let current = arr[i]
            let next = arr[current.nw]
            // console.log(i, next)
        }
    }
    testing(grid)

    // checkNeighbors(grid)


    // console.log(isPlaying)

    return(
        <div className = 'secondary_container'>
            <h4>This Will be the Grid</h4>
                <GridContainer className = 'grid_container'>
                    {grid ? grid.map((g, i) => (
                        <Cell key = {g.id} ind_cell = {g} index = {i} lifeToggler = {lifeToggler}/>
                    )) : null}
                </GridContainer>
                <Inputs player = {player} />
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

