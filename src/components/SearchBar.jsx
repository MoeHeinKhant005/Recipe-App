import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = () => {
    return (
        <div className="search-bar w-[90%] h-12 bg-slate-200 flex flex-none flex-row justify-evenly items-center px-2 md:w-4/5 lg:w-5/12">
            <input type="text" className="search-bar-input w-4/5 h-auto bg-transparent text-slate-800 font-dm-sans text-sm placeholder:text-slate-400 border-none outline-none" placeholder="Search a recipe..."/>
            <MagnifyingGlass size={24} className="text-slate-400"/>
        </div>
    )
}

export default SearchBar;