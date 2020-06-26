import React from 'react';
import styled from 'styled-components';

const Rules = () => {
    return(
        <div className = 'rules_container'>
            <RulesHead>Rules of the Game</RulesHead>
            <RuleNumbers>1: Any living cell that has 2 or 3 neighbors stays alive</RuleNumbers>
            <RuleNumbers>2: Any dead cell that has exactly 3 neighbors is "born"</RuleNumbers>
            <RuleNumbers>3: Any cells that don't meet rules 1 or 2 will be dead in the next generation</RuleNumbers>
        </div>
    )
}

export default Rules;

const RulesHead = styled.h4`
    font-size: 3rem;
    font-weight: bold;
`

const RuleNumbers = styled.h6`
    font-size: 1.5rem;

`