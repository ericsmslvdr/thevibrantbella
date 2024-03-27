import React from 'react'
import { ProductCard } from './ProductCard'
import { NavigateButton } from './NavigateButton'

export const NewArrival = () => {
    return (
        <div className='container mx-auto w-dvw border-solid border-red-500 border py-8'>
            <div className='mb-4'>New Arrival</div>
            <div className='flex gap-2'>
                <NavigateButton>Prev</NavigateButton>
                <div className='border border-solid border-green-500 flex gap-4 w-full'>
                    <ProductCard>Product 1</ProductCard>
                    <ProductCard>Product 2</ProductCard>
                    <ProductCard>Product 3</ProductCard>
                    <ProductCard>Product 4</ProductCard>
                </div>
                <NavigateButton>Next</NavigateButton>
            </div>
        </div>
    )
}
