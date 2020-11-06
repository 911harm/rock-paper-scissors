import React, { useContext } from 'react'
import styled from 'styled-components'
import { ScoreContext } from '../context'


const ScoreStyled = styled.div`
 background:white;
 text-align:center;
 padding:10px 0;
 border-radius:.5em;
 width:80px;
 small{
     font-size:12px;
     color:#2A45C2;
     text-transform:uppercase;
 }
 p{
     font-size:40px;
     margin:0;
    color:#565468;
    font-weight:700;
 }
`

export default function Score() {
    const {scoreC}=useContext(ScoreContext)
    return (
        <ScoreStyled>
            <small>Score</small>
            <p>{scoreC}</p>
        </ScoreStyled>
    )
}