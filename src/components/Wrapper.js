import React from 'react'
import styled from 'styled-components'


const WrapperStyledStyled = styled.div`
 max-width:1366px;
 margin:auto;
`

export default function Wrapper({children}) {
    return (
        <WrapperStyledStyled>
            {children}
        </WrapperStyledStyled>
    )
}