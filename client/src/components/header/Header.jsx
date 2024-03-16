import React from 'react'
import { Actions, Navbar, Socials } from './header'

const Header = () => {
    return (
        <div className='border-b border-solid border-slate-200 p-4 sm:p-0'>
            <div className="container mx-auto">
                <Socials />
                <Actions />
                <Navbar />
            </div >
        </div>
    )
}

export default Header