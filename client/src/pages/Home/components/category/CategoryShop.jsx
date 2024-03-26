import React from 'react'
import { CategoryCard } from './CategoryCard'

export const CategoryShop = () => {
    return (
        <div className='container mx-auto w-dvw border-solid border-orange-500 border py-8'>
            <div className='flex flex-wrap gap-4'>
                <CategoryCard className={'basis-1/4'}>Shop Dress</CategoryCard>
                <CategoryCard className={'basis-1/4'}>Shop Tops</CategoryCard>
                <CategoryCard className={'basis-1/4'}>Shop Bottoms</CategoryCard>
                <CategoryCard className={'basis-1/3'}>Shop FootWear</CategoryCard>
                <CategoryCard className={'basis-1/3'}>Shop Beauty</CategoryCard>
            </div>
        </div>
    )
}