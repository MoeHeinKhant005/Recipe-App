import { X } from '@phosphor-icons/react';
import { useContext } from 'react';
import { SidebarContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const [isExpanded, setIsExpanded] = useContext(SidebarContext);

    // Navigator
    const navigate = useNavigate();

    return (
        <nav className="sidebar w-[65%] h-screen bg-primary flex flex-none flex-col justify-start items-center fixed top-0 right-0 gap-y-6 py-6 lg:hidden transition-all" style={{transform: isExpanded ? 'translateX(0%)' : 'translateX(100%)'}}>
            <X size={28} weight='bold' className='text-white self-end mx-8' onClick={() => setIsExpanded(!isExpanded)}/>
            <div className="sidebar-wrapper w-10/12 h-auto flex flex-none flex-col justify-evenly items-center gap-y-3">
                <div className="w-full h-12 bg-black bg-opacity-10 flex flex-none flex-row justify-center items-center text-white font-dm-sans text-sm rounded" onClick={() => navigate('/randomRecipe')}>Random Recipe</div>
                <div className="w-full h-12 bg-black bg-opacity-10 flex flex-none flex-row justify-center items-center text-white font-dm-sans text-sm rounded" onClick={() => navigate('/')}>Search Recipe</div>
            </div>
        </nav>
    )
}

export default Sidebar;