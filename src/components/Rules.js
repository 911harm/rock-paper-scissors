import React from 'react'
import styled from 'styled-components'
 
 
const RulesStyled = styled.button`
 display:block;
 cursor:pointer;
 margin:30px auto 0 ;
 background:transparent;
 border:1px solid white;
 border-radius:.5em;
 padding:15px 25px;
 color:white;
 font-weight:700;
 text-transform:uppercase; 
 &:hover{
     background:white;
     color:hsl(214, 47%, 23%);
 }
`
 
export default function Rules({OnOpen,isVisible}) {
    return (
        <RulesStyled onClick={OnOpen}>
            Rules
        </RulesStyled>
    )
}