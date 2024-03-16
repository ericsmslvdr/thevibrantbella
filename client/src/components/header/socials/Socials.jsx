import React from 'react'
import { FacebookIcon, ShopeeIcon, TiktokIcon } from '../../../assets/images'

const Socials = ({ isOpen }) => {
    return (
        <ul className={`${!isOpen ? 'max-sm:hidden' : ''} p-4 flex items-center gap-4 sm:p-0 sm:py-2`}>
            <li><FacebookIcon size={26} className='icon-btn' /></li>
            <li><ShopeeIcon size={24} className='icon-btn' /></li>
            <li><TiktokIcon size={24} className='icon-btn' /></li>
        </ul >
    )
}

export default Socials