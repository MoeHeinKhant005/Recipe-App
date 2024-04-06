import { List } from '@phosphor-icons/react';

const Header = () => {
    return (
        <header className="header w-full h-16 bg-white flex flex-none flex-row justify-center items-center border border-gray-200 sticky top-0">
            <div className="header-wrapper w-4/5 h-auto flex flex-none flex-row justify-between items-center">
                <span className="brand text-primary font-outfit text-3xl font-bold">FoodNet</span>
                <div className="desktop-header-items w-auto h-auto hidden flex-none flex-row justify-evenly items-center gap-x-16 lg:flex">
                    <a href="" className="text-primary font-dm-sans text-base underline-offset-8 hover:underline">Random Recipe</a>
                    <a href="" className="text-primary font-dm-sans text-base underline-offset-8 hover:underline">Search Recipe</a>
                </div>
                <List size={28} weight='bold' className='text-primary lg:hidden'/>
            </div>
        </header>
    )
}

export default Header;