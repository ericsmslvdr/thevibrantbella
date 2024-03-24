import React from 'react'
import { MainLayout } from '@layout'
import { NewArrival } from './components/new-arrivals'
import { CategoryShop } from './components/category'

export const Home = () => {
    return <>
        <MainLayout>
            <div className='container mx-auto'>
                <CategoryShop />
                <NewArrival />
            </div>
        </MainLayout>
    </>
}