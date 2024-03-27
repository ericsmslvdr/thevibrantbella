import React from 'react'
import { StepCard } from './StepCard'

export const OurProcess = () => {
    return (
        <div className='container mx-auto w-dvw border-solid border-red-500 border py-8'>
            <div className='text-center mb-4'>Verified, Process, Delivered</div>
            <div className='border border-solid border-green-500 flex gap-4 w-full'>
                <StepCard>Step 1</StepCard>
                <StepCard>Step 2</StepCard>
                <StepCard>Step 3</StepCard>
                <StepCard>Step 4</StepCard>
            </div>
        </div>
    )
}
