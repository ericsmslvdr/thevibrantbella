export const Categories = ({ isOpen }) => {
    const navLinks = [
        'Dress',
        'Tops',
        'Bottoms',
        'Footwear',
        'Beauty'
    ]

    return (
        <ul className={`${!isOpen ? 'hidden' : ''} text-lg pt-4 sm:flex gap-8 sm:text-base sm:pt-0 sm:pb-2`}>
            {navLinks.map((navlink, index) => (
                <li className='nav-link' key={index}>{navlink}</li>
            ))}
        </ul>
    )
}