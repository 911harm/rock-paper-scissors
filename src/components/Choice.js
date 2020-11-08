import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    box-shadow:0 0 52px 25px rgba(255,255,255,.2);
    transform:rotateY(360deg)
  }
`

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
 ${({ activeW }) => activeW && 'box-shadow:0 0 0px 0px rgba(255,255,255,.2);'}
 animation:${({ activeW }) => activeW ? rotate : ""} 1s linear forwards;
 cursor:pointer;
 transition:100ms all;
    &:active{
        transform:scale(.89)
    }


@media screen and (min-width:768px){
    width:150px;
    height:145px;
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

export default function Choice({ name, onClick, active }) {
    function handleClick() {
        if (onClick) {
            onClick(name)
        }
    }
    return (
        <ChoiceStyled onClick={handleClick} activeW={active} color={color[name]}>
            <img src={`./images/icon-${name}.svg`} alt={name} />
        </ChoiceStyled>
    )
}