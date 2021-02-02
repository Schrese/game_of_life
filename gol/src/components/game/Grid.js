import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Cell from './Cell.js';
import Inputs from './Inputs.js';
import Rules from './Rules.jsx';
import { koksGalaxy, pentadecathlon, simpleGlider, shortLine, longLine } from './helpers.js';

// Cell Class
// has properties: id, row, col, alive, 
class EachCell {
    constructor(id, row, col, isAlive, max) {
        this.id = id
        this.row = row
        this.col = col
        this.isAlive = isAlive
        this.max = max
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

const initRows = {r: '25'}

const Grid = () => {
    const [rows, setRows] = useState(Number(initRows.r))
    const [grid, setGrid] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [generation, setGeneration] = useState(0)
    const [cellShape, setCellShape] = useState(true);
    // const [cellText, setCellText] = useState('Circle')

    useEffect(() => {
    // function to create rows/columns/cells
        generateCells(rows)
    }, [rows, setGrid])

    function generateCells(n) {
        setGeneration(0)
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

    function generatePreset(arr) {
        let newArr = []
        let newCell
        arr.forEach(a => {
            newCell = new EachCell(a.id, a.row, a.col, a.isAlive, a.rows)
            newArr.push(newCell)
            return setGrid(newArr) 
    })}

    function generateRandomCells(n) {
        setGeneration(0)
        let gen_id = 0
        let newCell
        let arr = []
        for (let i = 1; i <= n; i++){
            for (let j = 1; j <= n; j++) {
                let rand = Math.round(Math.random() * 1) 
                if (rand === 0) {
                    rand = false
                } else {
                    rand = true
                }
                gen_id += 1
                newCell = new EachCell(gen_id, i, j, rand, rows)
                arr.push(newCell)
            }
        }
        return setGrid(arr)
    }

    function checkNeighbors(cIndex, r, c, max) {

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
            nw = cIndex - 1
            n = cIndex - max
            ne = n + 1
            e = cIndex + 1
            se = 1
            s = 0
            sw = max - 1
            w = (max * max) - 1
        } else if (r === 1 && c === max) { // Top Right
            nw = (max * max - 1) - 1
            n = (max * max) - 1 
            ne = max *(max - 1) 
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
            n = cIndex - max
            nw = n - 1
            ne = n + 1
            e = cIndex + 1
            s = cIndex - max * (max - 1)
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
            n = cIndex - max
            nw = n - 1
            ne = cIndex - max * 2 + 1
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

    useEffect(() => {
        if (isPlaying) {
            setTimeout(() => {
                generateGrid2(grid)
            }, 1000)
        }
    })


    function generateGrid2(arr) {

        let newArr = []

        // Loop through the array
        setGeneration(generation + 1)
        let nextArr = arr.map((c, ind)=> {
            let actual = checkNeighbors(ind, c.row, c.col, rows)
            let livingCount = 0
            if(arr.length > 0) {
                actual.forEach(a => {
                    let something = arr[a]
                    let another = Object.values(something)
                    if (another[3] === true) {
                        livingCount += 1
                    }
                })
                if (c.isAlive && (livingCount === 2 || livingCount === 3)) {
                    return {...c}
                } else if (c.isAlive && (livingCount < 2 || livingCount > 3)) {
                    return {...c, isAlive: !c.isAlive}
                } else if (!c.isAlive && livingCount === 3) {
                    return {...c, isAlive: !c.isAlive}
                } else {
                    return {...c}
                }
            } 
        })
        for (let i = 0; i < nextArr.length; i++) {
            let updatedCell = new EachCell(nextArr[i].id, nextArr[i].row, nextArr[i].col, nextArr[i].isAlive, rows)
            newArr.push(updatedCell)
        }

        setGrid(newArr)
    }

    const lifeToggler = (obj) => {
        if (isPlaying === false) {
        obj.isAlive = !obj.isAlive
        setGrid([...grid])
        }
    }

    const playToggle = e => {
        setIsPlaying(!isPlaying)
    }

    const cellShapeToggle = e => {
        setCellShape(!cellShape)
    }


    const changeRows = e => {
        setRows(Number(e.target.value))
    }
    return (
        <div className='grid-container'>
            <div>
                <Inputs playToggle = {playToggle} clearer = {generateCells} rows = {rows} randomCells = {generateRandomCells} changeRows = {changeRows} setRows = {setRows} generation = {generation} cellShapeToggle = {cellShapeToggle} cellShape = {cellShape} grid = {grid} koksGalaxy = {koksGalaxy} pentadecathlon = {pentadecathlon} simpleGlider = {simpleGlider} shortLine = {shortLine} longLine = {longLine} generatePreset = {generatePreset} generateGrid2 = {generateGrid2} />
            </div>
            <div className='grid'>

                <div className='inner-grid'
                style = 
                {{gridTemplateColumns: 
                    rows === 25 ? `repeat(${rows}, ${30}px)` : 
                    rows === 30 ? `repeat(${rows}, ${27}px)` : 
                    rows === 40 ? `repeat(${rows}, ${23}px)` : 
                    `repeat(${rows}, ${21}px)`, 
                    gridTemplateRows: 
                    rows === 25 ? `repeat(${rows}, ${30}px)` : 
                    rows === 30 ? `repeat(${rows}, ${27}px)` : 
                    rows === 40 ? `repeat(${rows}, ${23}px)` : 
                    `repeat(${rows}, ${21}px)`
                }} >
                    {grid ? grid.map((g, i) => (
                        <Cell key = {g.id} ind_cell = {g} index = {i} lifeToggler = {lifeToggler} cellShape = {cellShape} rows = {rows} />
                        )) : null}
                </div>
            </div>
            <div>
                <Rules />
            </div>
        </div>
    )
}

export default Grid;

// const GridContainer = styled.div`
//     display: grid;
//     justify-content: center;
//     padding: 10px;
//     height: 80%;
//     width: 100%;
// `

