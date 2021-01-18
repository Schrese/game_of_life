import React from 'react';
import styled from 'styled-components';

import Grid from './game/Grid.js';

const Game = () => {

    return(
        <div className = 'main_container'>
            <GridContainer>
                <Grid />
            </GridContainer>
        </div>
    )
}

export default Game;

const GridContainer = styled.div`
    width: 100%;
    height: 1400px;
`