import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Cell from './Cell.js'

// const grid = [
//     {id: 1, row: 1, col: 1 },
//     {id: 2, row: 1, col: 2 },
//     {id: 3, row: 1, col: 3},
//     {id: 4, row: 1, col: 4},
//     {id: 5, row: 1, col: 5},

//     {id: 6, row: 2, col: 1},
//     {id: 7, row: 2, col: 2},
//     {id: 8, row: 2, col: 3},
//     {id: 9, row: 2, col: 4},
//     {id: 10, row: 2, col: 5},

//     {id: 11, row: 3, col: 1},
//     {id: 12, row: 3, col: 2},
//     {id: 13, row: 3, col: 3},
//     {id: 14, row: 3, col: 4},
//     {id: 15, row: 3, col: 5},

//     {id: 16, row: 4, col: 1},
//     {id: 17, row: 4, col: 2},
//     {id: 18, row: 4, col: 3},
//     {id: 19, row: 4, col: 4},
//     {id: 20, row: 4, col: 5},

//     {id: 21, row: 5, col: 1},
//     {id: 22, row: 5, col: 2},
//     {id: 23, row: 5, col: 3},
//     {id: 24, row: 5, col: 4},
//     {id: 25, row: 5, col: 5},

// ]

// Cell Class
// has properties: id, row, col, alive, 
class EachCell {
    constructor(id, row, col, isAlive) {
        this.id = id
        this.row = row
        this.col = col
        this.isAlive = isAlive
    }
    // setIsAlive(isAlive) {
    //     this.isAlive = true
    //     console.log(this.isAlive)
    // }
}


const Grid = () => {
    // const [currentGen, setCurrentGen] = useState([])
    // const [columns, setColumns] = useState(5)
    const [rows, setRows] = useState(25)
    const [grid, setGrid] = useState([])
    // const [aliveToggler, setAliveToggler] = useState(false)

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
                    // console.log(arr)
                    // setGrid(grid, newCell)
                    // console.log(newCell)
                    // return grid
                }
            }
            return setGrid(arr)
        }
        generateCells(rows)
    }, [rows, setGrid])

    const something = grid[1]
    console.log(grid[1])
    const lifeToggler = (obj) => {
        obj.isAlive = !obj.isAlive
        setGrid([...grid, grid[obj.id-1]])
        // console.log(grid)
    }
    console.log(grid)
    // // function to create rows/columns/cells
    // function generateCells(n) {
    //     let gen_id = 0
    //     let newCell
    //     let arr = []
    //     for (let i = 1; i <= n; i++){

    //         for (let j = n; j > 0; j--) {
    //             gen_id += 1
    //             newCell = new EachCell(gen_id, i, j, false)
    //             arr.push(newCell)
    //             // console.log(arr)
    //             // setGrid(grid, newCell)
    //             // console.log(newCell)
    //             // return grid
    //         }
    //     }
    //     return arr
    // }

    // let generated = generateCells(25)
    // console.log(generated, 'final product')

    return(
        <div className = 'secondary_container'>
            <h4>This Will be the Grid</h4>
                <GridContainer className = 'grid_container'>
                    {grid ? grid.map(g => (
                        <Cell key = {g.id} ind_cell = {g} lifeToggler = {lifeToggler}/>
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

