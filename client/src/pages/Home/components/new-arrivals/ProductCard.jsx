import React from 'react'

export const ProductCard = ({ children }) => {
    return (
        <div className='border border-solid border-blue-500 h-96 grow'>
            {children}
        </div>
    )
}
