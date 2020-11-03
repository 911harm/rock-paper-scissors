import React from 'react'
import styled from 'styled-components'
import Choice from './Choice'
 
 
const TableStyled = styled.div`
 display:grid;
background-image:url("./images/bg-triangle.svg");
background-repeat:no-repeat;
background-position-y:30px;
margin-top:30px;
 grid-template-columns:130px 130px;
 justify-content:center;
 justify-items:center;
 grid-gap:50px;
 & div:nth-of-type(3){
     grid-column:span 2;
 }

`
 
export default function Table() {
    return (
        <TableStyled>
            <Choice name="paper"/>
            <Choice name="scissors"/>
            <Choice name="rock"/>
        </TableStyled>
    )
}