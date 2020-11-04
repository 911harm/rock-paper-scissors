import React from 'react'
import styled from 'styled-components'


const ChoiceStyled = styled.div`
box-sizing:border-box;
 display:flex;
 width:130px;
 height:125px;
 border:15px solid ${({ color }) => color.base};
 border-radius:50%;
 justify-content:center;
 align-items:center;
 background:white;
 box-shadow:0 2px 0 ${({ color }) => color.shadow};
 cursor:pointer;
 transition:100ms all;
 &:active{
     transform:scale(.89)
 }
`
const color = {
    paper: {
        base: "#516ef4",
        shadow: "#2543c3"
    },
    rock: {
        base: "#de3a5a",
        shadow: "#980e31"
    },
    scissors: {
        base: "#eca81e",
        shadow: "#c76c14"
    },
    default: {
        base: "#1222343",
        shadow: "#1222343"
    }
}

export default function Choice({ name, onClick }) {
    const handleClick = () => {
        onClick(name)
    }
    return (
        <ChoiceStyled onClick={handleClick} color={color[name]}>
            <img src={`./images/icon-${name}.svg`} alt={name} />
        </ChoiceStyled>
    )
}