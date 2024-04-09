import SingleRecipe from '../components/SingleRecipe';
import Button from '../components/Button';
import { ArrowsClockwise } from '@phosphor-icons/react';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const RandomRecipe = () => {

    // State data to regenerate random recipe on click event
    const [generate, setGenerate] = useState(false);
    
    // Fetched data from the API using custom hook
    const { data, isLoading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/random.php', generate);

    return (
        <div className="random-recipe-page w-full h-auto bg-white flex flex-none flex-col justify-evenly items-center gap-y-6 py-6">
            <span className="random-recipe-title text-primary font-outfit font-bold text-2xl">A recipe you should try - </span>
            { !isLoading ? (<SingleRecipe recipeData={data.meals[0]}/>) : <p className='text-slate-800 font-dm-sans text-sm'>Generating a random recipe...</p>}
            { error ? <p className='text-slate-800 font-dm-sans text-sm'>{error}</p> : null }
            { data ? 
            (<Button onClick={() => setGenerate(!generate)}>
                <ArrowsClockwise size={16}/>
                <span>Generate more</span>
            </Button>) : null
            }
        </div>
    )
}

export default RandomRecipe;