import React from 'react'
import Category from '../../components/category/Category'
import { MainLayout } from '@pages/layout'

export const Home = () => {
    return <>
        <MainLayout>
            <div className='container mx-auto'>Home Page</div>
            <Category />
        </MainLayout>
    </>
}