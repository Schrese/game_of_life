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
        // this.nw = id - max - 1
        // this.n = id - max
        // this.ne = id - max + 1
        // this.e = id + 1
        // this.se = id + max + 1
        // this.s = id + max
        // this.sw = id + max - 1
        // this.w = id - 1
    }
    test() {
        return this.id
    }
    getRow() {
        return this.row
    }
    getCol() {
        return this.col
    }
}


const Grid = () => {
    const [rows, setRows] = useState(5)
    const [grid, setGrid] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    // const [nextGrid, setNextGrid] = useState([])
    // const [generation, setGeneration] = useState(0)
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

    // So the issue I'm running into right now is that I'm not taking the edges of the grid into account. It's still looking for cells outside of the bounds of the grid
    // Turns out rows and columns are in reverse order as well
    // Issue I'll run into: looking up the index will be 1 less than the id

    // So I need a function that accepts the individual cell's index, the 'col', and the "row" as parameters so that I know what the end of each row/column is (This will be used/invoked in a loop of some kind that checks the cell). Also takes in the max (which is just the row's)
    function checkNeighbors(cIndex, r, c, max) {
    // Set up what will need to be subtracted/added to the directions to figure out which cell's id to look at for whether it is alive or dead
        // I actually don't think I'll need this

        // Set up variables for each of the 8 directions, going clockwise from top-left
        let nw
        let n
        let ne
        let e
        let se
        let s
        let sw
        let w

        // Check edge-cases first (like corners and sides of the grid)
        if (r === 1 && c === 1) { // Top Left
            nw = (max * max) - 1
            n = max * (max - 1) 
            ne = n + 1
            e = cIndex + 1
            se = cIndex + max + 1
            s = cIndex + max
            sw = (max * 2) - 1
            w = max - 1
        } else if (r === max && c === 1) { // Bottom Left
            nw = (max * max - 1) - 1
            n = cIndex - max
            ne = cIndex - max + 1
            e = cIndex + 1
            se = 1
            s = 0
            sw = max - 1
            w = (max * max) - 1
        } else if (r === 1 && c === max) { // Top Right
            nw = (max * max) - 2
            n = (max * max) - 1 
            ne = max * 2
            e = 0
            se = max
            s = cIndex + max
            sw = cIndex + max - 1
            w = cIndex - 1
        } else if (r === max && c === max) { // Bottom Right
            nw = cIndex - max - 1
            n = cIndex - max
            ne = (max * (max - 1)) - max
            e = max * (max - 1)
            se = 0
            s = max - 1
            sw = max - 2
            w = cIndex - 1
        } else if (r === 1) { // Top Wall
            n = max * (max - 1) + cIndex
            nw = n - 1
            ne = n + 1
            e = cIndex + 1
            se = cIndex + max + 1
            s = cIndex + max
            sw = cIndex + max - 1
            w = cIndex - 1
        } else if (r === max) { // Bottom Wall
            nw = cIndex - max - 2
            n = cIndex - max
            ne = cIndex - max + 1
            e = cIndex + 1
            s = cIndex - (max * (max - 1))
            sw = s - 1
            se = s + 1
            w = cIndex - 1
        } else if (c === 1) { // Left Wall
            nw = cIndex - 1
            n = cIndex - max
            ne = cIndex - max + 1
            e = cIndex + 1
            se = cIndex + max + 1
            s = cIndex + max
            sw = (max * 2) + cIndex - 1
            w = cIndex + max - 1
        } else if (c === max) { // Right Wall
            nw = cIndex - max - 2
            n = cIndex - max
            ne = n + 1
            e = cIndex - max + 1
            se = cIndex + 1
            s = cIndex + max
            sw = cIndex + max - 1
            w = cIndex - 1
        // Then set the directions for the "inner" cells
        } else { // Inner Cells (not on "wall's")
            n = cIndex - max
            s = cIndex + max
            e = cIndex + 1
            w = cIndex - 1
            nw = n - 1
            ne = n + 1
            se = s + 1
            sw = s - 1
        }
    // return an array of the 8 directions
    return [nw, n, ne, e, se, s, sw, w]
    }    

    function getIndCell(arr, index) {
        // let output
        if (arr) {
            let accessing = arr[index]
            // console.log(accessing)
            let output = Object.values(accessing)
            // final = output.some(v => v === true)
            // console.log(output, 'from aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
            return output
        }
    }
    if(grid.length !== 0) {
        getIndCell(grid, 1)
    } 

    function generateGrid2(arr) {
        // Takes in an array 

        // Loop through the array
        // console.log(arr, 'from the inside')
        arr.forEach((c, ind)=> {
            let actual = checkNeighbors(ind, c.row, c.col, rows)
            console.log(c.id, ind, actual)
            let livingCount = 0
            if(arr.length > 0) {
                actual.forEach(a => {
                    let something = arr[a]
                    // console.log(c, something) // THIS SHOULD WORK ONCE I FIX THE GRID
                    let another = Object.values(something)
                    // console.log(another[3])
                    if (another[3] === true) {
                        console.log('hello')
                        livingCount += 1
                    }
                })
                console.log(livingCount)
                if (c.isAlive && (livingCount === 2 || livingCount === 3)) {
                    console.log("Stayin' Alive!")
                    return c
                } else if (c.isAlive && (livingCount < 2 || livingCount > 3)) {
                    console.log('dead!')
                    return {...c, isAlive: !c.isAlive}
                } else if (!c.isAlive && livingCount === 3) {
                    console.log('I arise from the ashes')
                    return {...c, isAlive: !c.isAlive}
                } else {
                    console.log("Unafected")
                    return 
                }
            }  
            

            })

        

        // }
        // Each element is run through the checkNeighbors function
        // then those neigbbors are looped through to see if they are alive or dead
    }

    if (grid.length !== 0) {
        generateGrid2(grid)
    }

    
    // let accessing = grid[1]
    // console.log(accessing)
    // let a = Object.entries(accessing)
    // console.log(a)




    // function generateCurrentGrid(arr, row) {
    //     console.log(arr.length)
    //     let r = row * row 
    //     let curCell 
    //     let northCell
    //     let northAttr
    //     // console.log(r)
    //     arr.forEach(c => {
    //         // console.log(c.id)
    //         curCell = arr[c.id - 1]
    //         northCell = curCell.n
    //         northAttr = arr[northCell]
    //         console.log(curCell.id, northCell, northAttr)

    //     })
    // }
    // generateCurrentGrid(grid, rows);
    console.log(grid)
    const lifeToggler = (obj) => {
        if (isPlaying === false) {
        obj.isAlive = !obj.isAlive
        setGrid([...grid])
        console.log(obj)
        }
    }

    const player = e => {
        setIsPlaying(!isPlaying)
    }

    // function testing(arr) {
    //     let i = 0
    //     for(i in arr){
    //         let current = arr[i]
    //         // let next = arr[current.nw]
    //         // console.log(i, next)
    //     }
    // }
    // testing(grid)
    // // console.log(isPlaying)

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

