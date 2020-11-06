import React from 'react'
import styled from 'styled-components'
import Score from './Score'


const HeaderStyled = styled.div`
 display:flex;
 justify-content: space-between;
 align-items:center;
 color:white;
 padding:12px 12px 12px 23px;
 border-radius:.5em;
 border:3px solid rgba(255,255,255,.29);
h1{
    font-weight:700;
    line-height:16px;
    text-transform:uppercase;
    font-size:18px;
}
`

export default function Header() {
    return (
        <HeaderStyled>
            <h1>Rock <br /> Paper <br /> Scissors</h1>
            <Score />
        </HeaderStyled>
    )
}