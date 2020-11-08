import React from 'react'
import styled from 'styled-components'


const WrapperStyledStyled = styled.div`
 max-width:1366px;
 margin:auto;

@media screen and (min-width:768px){
    padding: 0 8%;
}
`

export default function Wrapper({children}) {
    return (
        <WrapperStyledStyled>
            {children}
        </WrapperStyledStyled>
    )
}