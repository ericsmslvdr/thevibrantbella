import { Categories } from './Categories'
import { Socials } from './Socials'
import { CloseIcon } from '@shared/assets/icons'

export const SidebarPhone = ({ onClick }) => {
    return (
        <div className='absolute top-0 left-0 bottom-0 w-full bg-dim sm:hidden'>
            <div className='bg-lightPink w-96 h-full p-4'>
                <CloseIcon size={24} className='icon-btn' onClick={onClick} />
                <Categories isOpen={true} />
                <Socials isOpen={true} />
            </div>
        </div>
    )
}
