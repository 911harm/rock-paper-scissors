import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components'


const ModalStyled = styled.div`
font-family: 'Barlow Semi Condensed', sans-serif;
position:absolute;
top:8px;
left:0;
right:0;
bottom:0;
height:110vh;
background:white;
text-align:center;
padding:10px 0;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
font-weight:700;
button{
    background:none;
    border:none;
}
h2{
    text-transform:uppercase;
    color:#3B4262;
}
`

export default function Modal({OnClose}) {
    return ReactDOM.createPortal(
        <ModalStyled>
            <h2>Rules</h2>
            <img src="./images/image-rules.svg" alt="Game Rules"/>
            <button onClick={OnClose}><img src="./images/icon-close.svg" alt="Close Rules"/></button>
        </ModalStyled>,document.getElementById('modal')
    )
}