import React from 'react'

const Navbar = ({ isOpen }) => {
    return (
        <ul className={`${!isOpen ? 'hidden' : ''} text-lg pt-4 sm:flex gap-8 sm:text-base sm:pt-0 sm:pb-2`}>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>Dress</li>
            <li className='nav-link'>Tops</li>
            <li className='nav-link'>Bottoms</li>
            <li className='nav-link'>Footwear</li>
            <li className='nav-link'>Beauty</li>
        </ul>
    )
}

export default Navbar