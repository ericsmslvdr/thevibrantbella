import React, { useState } from 'react'
import { FacebookIcon, ShopeeIcon, TiktokIcon, CloseIcon, MenuIcon, PersonOutlineIcon, SearchIcon, CartIcon, } from '../../assets/icons'
import { logoText } from '../../assets/images'

export const Socials = ({ isOpen }) => {
    return (
        <ul className={`${!isOpen ? 'max-sm:hidden' : ''} p-4 flex items-center gap-4 sm:p-0 sm:py-2`}>
            <li><FacebookIcon size={26} className='icon-btn' /></li>
            <li><ShopeeIcon size={24} className='icon-btn' /></li>
            <li><TiktokIcon size={24} className='icon-btn' /></li>
        </ul >
    )
}

export const Navbar = ({ isOpen }) => {
    const navLinks = [
        'Home',
        'Dress',
        'Tops',
        'Bottoms',
        'Footwear',
        'Beauty'
    ]

    return (
        <ul className={`${!isOpen ? 'hidden' : ''} text-lg pt-4 sm:flex gap-8 sm:text-base sm:pt-0 sm:pb-2`}>
            {navLinks.map(navlink => (
                <li className='nav-link'>{navlink}</li>
            ))}
        </ul>
    )
}

export const Actions = () => {
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

export const HeaderLayout = ({ children }) => {
    return (
        <div className='border-b border-solid border-slate-200 p-4 sm:p-0'>
            <div className="container mx-auto">
                {children}
            </div >
        </div>
    )
}

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