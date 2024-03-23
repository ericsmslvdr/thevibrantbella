import React from 'react'
import { MainLayout } from '@layout'
import { CategoryShop } from '@components/category'

export const Home = () => {
    return <>
        <MainLayout>
            <div className='container mx-auto'>
                <CategoryShop />
            </div>
        </MainLayout>
    </>
}