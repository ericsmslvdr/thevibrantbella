export const HeaderLayout = ({ children }) => {
    return (
        <div className='border-b border-solid border-slate-200 p-4 sm:p-0'>
            <div className="container mx-auto">
                {children}
            </div >
        </div>
    )
}