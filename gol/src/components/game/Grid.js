import React, {useState} from 'react';
import styled from 'styled-components';

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
class Cell {
    constructor(id, row, col, isAlive) {
        this.id = id
        this.row = row
        this.col = col
        this.isAlive = isAlive
    }
}


const Grid = () => {
    // const [currentGen, setCurrentGen] = useState([])
    // const [columns, setColumns] = useState(5)
    // const [rows, setRows] = useState(5)
    const [grid, setGrid] = useState([])

    // function to create rows/columns/cells
    function generateCells(n) {
        let gen_id = 0
        let newCell
        let arr = []
        for (let i = 1; i <= n; i++){

            for (let j = n; j > 0; j--) {
                gen_id += 1
                newCell = new Cell(gen_id, i, j, false)
                arr.push(newCell)
                // console.log(arr)
                // setGrid(grid, newCell)
                // console.log(newCell)
                // return grid
            }
        }
        return arr
    }

    let generated = generateCells(5)
    console.log(generated, 'final product')

    return(
        <div className = 'secondary_container'>
            <h4>This Will be the Grid</h4>
                <GridContainer className = 'grid_container'>
                {/* {grid.map(x => (
                    <OneCell className = 'cell_container' key = {x.id}>
                        <p className = 'ind_cell'>Box</p>{x.id}
                    </OneCell>
                ))} */}

            </GridContainer>
        </div>
    )
}

export default Grid;

const GridContainer = styled.div`
    // display: flex;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    padding: 10px;

    .grid_container > div {
        background: black;
        padding: 1rem;
    }

    .grid_container > div::before {
        content: "";
        padding-bottom: 100%;
        display: block;
    }
`

// const OneCell = styled.div`
//     background: pink;
//     // width: 5rem;
//     height: 5rem;
// `