import React from 'react'
import { Card } from '../components'

export const CategoryLayout = ({ children }) => {
    return (
        <div className='container mx-auto px-24'>
            <div className='flex flex-wrap gap-4'>
                {children}
                <div className='w-14 bg-red-500 flex-1 basis-1/3'>Card</div>
                <div className='w-14 bg-red-500 flex-1 basis-1/3'>Card</div>
                <div className='w-14 bg-red-500 flex-1 basis-1/3'>Card</div>
                <div className='w-14 bg-red-500 flex-1 basis-1/4'>Card</div>
                <div className='w-14 bg-red-500 flex-1 basis-1/4'>Card</div>
            </div>
        </div>
    )
}
