import React from 'react';
import styled from 'styled-components';

const Inputs = ({ player }) => {

    return(
        <div>
            <Button onClick = {() => player()}>Play/Pause</Button>
        </div>
    )
}

export default Inputs;

const Button = styled.button`
    width: 10%;
    height: 10%;
`