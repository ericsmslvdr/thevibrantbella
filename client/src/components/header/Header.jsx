import React from 'react'
import { Actions, Navbar, Socials } from './header'

const Header = () => {
    return (
        <div className="container mx-auto border-solid border-2">
            <Socials />
            <Actions />
            <Navbar />
        </div >
    )
}

export default Header