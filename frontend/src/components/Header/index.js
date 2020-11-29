import React from 'react'
import { Logo, HeaderContainer } from './styles'

import Icone from '../../assets/hermit-crab.png'

function Header(props) {
    return(
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='Pitu - Encurtador de URL' />
                <h1>Cried</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>
    )
}

export default Header