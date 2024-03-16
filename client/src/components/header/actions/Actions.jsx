import React, { useState } from 'react'
import { CartIcon, CloseIcon, MenuIcon, PersonOutlineIcon, SearchIcon, logoText } from '../../../assets/images'
import { Navbar, Socials } from '../header'

const Actions = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleFn = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className="flex justify-between items-center sm:py-4 sm:pb-8">
            <div className="hidden sm:block">
                <img src={logoText} alt="" />
            </div>
            <div className='sm:hidden'>
                {!isOpen
                    ? <MenuIcon size={24} className='icon-btn' onClick={toggleFn} />
                    : <div className='absolute top-0 left-0 bottom-0 w-full bg-dim sm:hidden'>
                        <div className='bg-lightPink w-96 h-full p-4'>
                            <CloseIcon size={24} className='icon-btn' onClick={toggleFn} />
                            <Navbar isOpen={isOpen} />
                            <Socials isOpen={isOpen} />
                        </div>
                    </div>}
            </div>
            <div className="flex gap-4">
                <div className="search-container"><SearchIcon size={24} className='icon-btn' /></div>
                <div className="profile-container"><PersonOutlineIcon size={24} className='icon-btn' /></div>
                <div className="cart-container"><CartIcon size={24} className='icon-btn' /></div>
            </div>
        </div>
    )
}

export default Actions