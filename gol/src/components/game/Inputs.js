import React from 'react';
import styled from 'styled-components';

const Inputs = ({ playToggle, clearer, rows }) => {

    return(
        <div>
            <Button onClick = {() => playToggle()}>Play/Pause</Button>
            <Button onClick = {() => clearer(rows)}>Clear</Button>
        </div>
    )
}

export default Inputs;

const Button = styled.button`
    width: 10%;
    height: 10%;
`