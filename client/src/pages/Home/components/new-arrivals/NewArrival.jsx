import React from 'react'

export const NewArrival = () => {
    return (
        <div className='container mx-auto w-dvw border-solid border-red-500 border py-8'>
            <div className='mb-4'>New Arrival</div>
            <div className='flex gap-2'>
                <button className='bg-orange-100'>Prev</button>
                <div className='border border-solid border-green-500 flex gap-4 w-full'>
                    <div className='border border-solid border-blue-500 h-96 grow'>Product 1</div>
                    <div className='border border-solid border-blue-500 h-96 grow'>Product 2</div>
                    <div className='border border-solid border-blue-500 h-96 grow'>Product 3</div>
                    <div className='border border-solid border-blue-500 h-96 grow'>Product 4</div>
                </div>
                <button className='bg-orange-100'>Next</button>
            </div>
        </div>
    )
}
