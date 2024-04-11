import SearchBar from '../components/SearchBar';
import Recipe from "../components/Recipe";

const SearchResults = () => {
    return (
        <div className="search-result-page w-full h-auto bg-white flex flex-none flex-col justify-start items-center gap-y-6 py-6">
            <SearchBar/>
            <span className="search-result-title w-[85%] text-primary font-outfit font-bold text-2xl lg:w-9/12">Results for *searchTerm*</span>
            <div className="search-result-wrapper w-full h-auto flex flex-wrap flex-none flex-row justify-center items-start gap-2">
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
            </div>
        </div>
    )
}

export default SearchResults;