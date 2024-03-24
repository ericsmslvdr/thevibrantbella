import React from 'react'

export const CategoryCard = ({ className, children }) => {
    return (
        <div className={`h-96 border border-solid grow shrink basis-1/4 ${className}`}>
            {children}
        </div>
    )
}
