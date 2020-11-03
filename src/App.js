import React,{useState} from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Table from './components/Table'
import Rules from './components/Rules'
import Modal from './components/Modal'

const AppStyled = styled.main`
background-image: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
min-height:100vh;
padding: 2em;
font-family: 'Barlow Semi Condensed', sans-serif;

 
`

function App() {
  const setIsVisibles=()=>{
    setIsVisible(!isVisible)
  }
  const [isVisible, setIsVisible] = useState(false)
  return (
    <AppStyled>
      <Wrapper>
        <Header></Header>
        <Table />
        <Rules OnOpen={setIsVisibles} />
        {isVisible &&
          <Modal OnClose={setIsVisibles}/>
        }
      </Wrapper>

    </AppStyled>
  );
}

export default App;
