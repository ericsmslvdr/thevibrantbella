import React from 'react'
import { CartIcon, PersonOutlineIcon, SearchIcon, logoText } from '../../../assets/images'

const Actions = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="logo">
                <img src={logoText} alt="" />
            </div>
            <div className="flex gap-4">
                <div className="search-container"><SearchIcon size={24} /></div>
                <div className="profile-container"><PersonOutlineIcon size={24} /></div>
                <div className="cart-container"><CartIcon size={24} /></div>
            </div>

        </div>
    )
}

export default Actions