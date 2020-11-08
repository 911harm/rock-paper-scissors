import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Choice from './Choice'
import { ScoreContext } from '../context'



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
background-position: center;
// background-position-y:30px;
margin:60px 0;
 grid-template-columns:130px 130px;
 justify-content:center;
 justify-items:center;
 ${({ Playing }) =>
        Playing ? ("grid-gap:35px;") : ("grid-gap:75px 60px;")}
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
@media screen and (min-width: 768px){
    
    grid-gap: 70px 140px;
}

`

export default function Table() {
    const { scoreC, setScoreC } = useContext(ScoreContext)
    const Choices = ["paper", "scissors", "rock"]
    const [UserWin, setUserWin] = useState(false)
    const [HouseWin, setHouseWin] = useState(false)
    const [whoW, setwhoW] = useState("")
    const [waiting, setwaiting] = useState("")
    const [Playing, setPlaying] = useState(false)
    const [pick, setpick] = useState("")

    function inGame() {
        return new Promise((resolve,reject)=>{
            let pickHouse
            setTimeout(() => {
                pickHouse=Choices[Math.floor(Math.random() * 3)]
                setwaiting(pickHouse)
                resolve(pickHouse) 
            }
                , 1000)
        
        })

    }
    function whoWin(s,pick) {
        if (s === pick) {
            // return "DRAW"
            setwhoW("DRAW")
        }
        if (pick === "paper") {
            if (s === "rock") {
                setwhoW("YOU WIN")
                setUserWin(true)
                setScoreC(scoreC+1)
            }
            if (s === "scissors") {
                setScoreC(scoreC-1)
                setHouseWin(true)
                setwhoW("YOU LOSE")
            }
        }
        if (pick === "scissors") {
            if (s === "rock") {
                setScoreC(scoreC-1)
                setHouseWin(true)
                setwhoW("YOU LOSE")
            }
            if (s === "paper") {
                setwhoW("YOU WIN")
                setUserWin(true)
                setScoreC(scoreC+1)
            }
        }
        if (pick === "rock") {
            if (s === "paper") {
                setScoreC(scoreC-1)
                setHouseWin(true)
                setwhoW("YOU LOSE")
            }
            if (s === "scissors") {
                setwhoW("YOU WIN")
                setUserWin(true)
                setScoreC(scoreC+1)
            }
        }
    }
    function PlayAganin() {
        setwaiting("")
        setUserWin(false)
        setHouseWin(false)
        setPlaying(false)
    }
     async function onClick(name) {
        setpick(name)
        setPlaying(true)
        const PickHouseAux= await inGame()
        whoWin(PickHouseAux,name)
        
    }
    return (
        <TableStyled Playing={Playing} >
            {Playing
                ? <React.Fragment>
                    <Choice active={UserWin} name={pick} />
                    {!waiting
                        ?
                        <div className="default"></div>
                        :
                        <React.Fragment>
                            <Choice name={waiting} active={HouseWin} />
                            <div className="play-again">
                                <h3 className="play-again-text">{whoW}</h3>
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