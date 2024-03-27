import React from 'react'
import { MainLayout } from '@layout'
import { NewArrival } from './components/new-arrivals'
import { CategoryShop } from './components/category'
import { OurProcess } from './components/our-process'

export const Home = () => {
    return <>
        <MainLayout>
            <div className='container mx-auto'>
                <CategoryShop />
                <NewArrival />
                <OurProcess />
            </div>
        </MainLayout>
    </>
}