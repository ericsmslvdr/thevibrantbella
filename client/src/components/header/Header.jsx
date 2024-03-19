import React from 'react'
import { Actions, Navbar, Socials } from './components'
import { HeaderLayout } from './layout'

const Header = () => {
    return (
        <HeaderLayout>
            <Socials />
            <Actions />
            <Navbar />
        </HeaderLayout>
    )
}

export default Header