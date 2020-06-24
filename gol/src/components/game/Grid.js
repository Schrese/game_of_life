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
    const [rows, setRows] = useState(5)
    const [grid, setGrid] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [nextGrid, setNextGrid] = useState([])
    const [generation, setGeneration] = useState(0)
    const [currentGrid, setCurrentGrid] = useState([])

    useEffect(() => {
    // function to create rows/columns/cells
        generateCells(rows)
    }, [rows, setGrid])

    function generateCells(n) {
        let gen_id = 0
        let newCell
        let arr = []
        for (let i = 1; i <= n; i++){
            for (let j = 1; j <= n; j++) {
                gen_id += 1
                newCell = new EachCell(gen_id, i, j, false, rows)
                arr.push(newCell)
            }
        }
        return setGrid(arr)
    }

    function generateCurrentGrid(arr, row) {
        console.log(arr.length)
        let r = row * row 
        let curCell 
        let northCell
        let northAttr
        // console.log(r)
        arr.forEach(c => {
            // console.log(c.id)
            curCell = arr[c.id - 1]
            northCell = curCell.n
            northAttr = arr[northCell]
            console.log(curCell.id, northCell, northAttr)
            // So the issue I'm running into right now is that I'm not taking the edges of the grid into account. It's still looking for cells outside of the bounds of the grid
            // Turns out rows and columns are in reverse order as well
        })
    }
    generateCurrentGrid(grid, rows);
    console.log(grid)
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
                <GridContainer className = 'grid_container'>
                    {currentGrid ? grid.map((g, i) => (
                        <Cell key = {g.id} ind_cell = {g} index = {i} lifeToggler = {lifeToggler}/>
                    )) : null}
                </GridContainer>
        </div>
    )
}

export default Grid;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 0fr);
    justify-content: center;
    padding: 10px;
`

