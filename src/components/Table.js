import React, { useState } from 'react'
import styled from 'styled-components'
import Choice from './Choice'


const TableStyled = styled.div`
display:grid;
${(props) => {
        if (props.Playing) {
            return ("background:none;")
        } else {
            return ('background-image:url("./images/bg-triangle.svg");')
        }
    }}
background-repeat:no-repeat;
background-position-y:30px;
margin:50px 0;
 grid-template-columns:130px 130px;
 justify-content:center;
 justify-items:center;
 ${({ Playing }) =>
        Playing ? ("grid-gap:25px;") : ("grid-gap:50px;")}
 & div:nth-of-type(3){
     grid-column:span 2;
 }
 .default{
    filter: blur(8px);
    box-sizing:border-box;
    border-radius:50%;
    display:flex;
    width:130px;
    height:125px;
    background:#122234;
 }
 .span-picked{
     color:white;
     font-size:16px;
 }
 .play-again{
    grid-column: 1 / span 2;
    grid-row: 3;
    .play-again-text{
        margin:0;
        margin-top: 20px;
        color:white;
        font-size:2em;
        text-align:center;
    }
    .btn-play-again{
        display:block;
        cursor:pointer;
        margin:20px auto 0 ;
        background:white;
        border:1px solid white;
        border-radius:.5em;
        padding:15px 25px;
        color:hsl(214, 47%, 23%);
        font-weight:700;
        text-transform:uppercase; 
        &:hover{
        background:transparent;
        color:white;
        }
    }
 }

`

export default function Table() {
    const Choices = ["paper", "scissors", "rock"]
    const [waiting, setwaiting] = useState("")
    const [Playing, setPlaying] = useState(false)
    const [pick, setpick] = useState("")
    function inGame() {
        setTimeout(() => {
            setwaiting(Choices[Math.floor(Math.random() * 3)])

        }
            , 1000)

    }
    function whoWin() {
        if (waiting === pick) {
            return "DRAW"
        }
        if (pick === "paper") {
            if (waiting === "rock") {
                return "YOU WIN"
            }
            if (waiting === "scissors") {
                return "YOU LOSE"
            }
        }
        if (pick === "scissors") {
            if (waiting === "rock") {
                return "YOU LOSE"
            }
            if (waiting === "paper") {
                return "YOU WIN"
            }
        }
        if (pick === "rock") {
            if (waiting === "paper") {
                return "YOU LOSE"
            }
            if (waiting === "scissors") {
                return "YOU WIN"
            }
        }
    }
    function PlayAganin() {
        setwaiting("")
        setPlaying(false)
    }
    function onClick(name) {
        setPlaying(true)
        setpick(name)
        inGame()
    }
    return (
        <TableStyled Playing={Playing} >
            {Playing
                ? <React.Fragment>
                    <Choice name={pick} />
                    {!waiting
                        ?
                        <div className="default"></div>
                        :
                        <React.Fragment>
                            <Choice name={waiting} />
                            <div className="play-again">
                                <h3 className="play-again-text">{whoWin()}</h3>
                                <button className="btn-play-again" onClick={PlayAganin}>Play Again</button>
                            </div>
                        </React.Fragment>
                    }
                    <span className="span-picked">YOU PICKED</span>
                    <span className="span-picked">THE HOUSE PICKED</span>
                </React.Fragment>
                : <React.Fragment>
                    <Choice name="paper" onClick={onClick} />
                    <Choice name="scissors" onClick={onClick} />
                    <Choice name="rock" onClick={onClick} />
                </React.Fragment>
            }
        </TableStyled>
    )
}