import SearchBar from '../components/SearchBar';
import Recipe from "../components/Recipe";
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const SearchResults = () => {

    // State data for searchTerm
    const [searchTerm, setSearchTerm] = useState('');

    // Query the data from API when the state changes
    const {data, isLoading, error} = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);

    return (
        <div className="search-result-page w-full h-auto bg-white flex flex-none flex-col justify-start items-center gap-y-6 py-6">
            <SearchBar searchData={[searchTerm, setSearchTerm]}/>
            <span className="search-result-title w-[85%] text-primary font-outfit font-bold text-2xl lg:w-9/12">{ searchTerm === '' ? 'Some popular recipes' : `Results for '${searchTerm}'`}</span>
            <div className="search-result-wrapper w-full min-h-[calc(100vh-(64px+48px+32px+48px+48px))] h-auto flex flex-wrap flex-none flex-row justify-center items-start gap-2">
                { !isLoading && 
                ( data.meals ? data.meals.map(recipe => <Recipe recipeData={recipe} key={recipe.idMeal}/>) : <p className='text-slate-800 font-dm-sans text-sm self-center'>Recipe not found!!</p>)
                }
                { error && <p className='text-slate-800 font-dm-sans text-sm'>{ error }</p> }
            </div>
        </div>
    )
}

export default SearchResults;