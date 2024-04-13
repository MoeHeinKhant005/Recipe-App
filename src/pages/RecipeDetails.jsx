import { CaretLeft, Globe } from '@phosphor-icons/react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const RecipeDetails = () => {

    // Navigator
    const navigate = useNavigate();

    // Fetch data from the api using specific recipe id
    const {data, isLoading, error} = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);

    // Function to return a ingredients array
    function generateIngredientsArray(){
        const ingredients = [];
        for(let i = 1; i <= 20; i++){
            if(data.meals[0][`strIngredient${i}`]){
                let currentIngredient = data.meals[0][`strIngredient${i}`].charAt(0).toUpperCase() + data.meals[0][`strIngredient${i}`].slice(1);
                let currentMeasure = data.meals[0][`strMeasure${i}`];
                ingredients.push(`${currentIngredient} - ${currentMeasure}`);
            }
        }
        return ingredients;
    }

    return (
        <div className="recipe-details w-full h-auto bg-white flex flex-none flex-col justify-start items-center gap-y-4 py-6">
            <CaretLeft size={28} className='text-primary self-start mx-6 my-3' onClick={() => navigate(-1)}/>

            { !isLoading && <img src={data.meals[0].strMealThumb} alt="" className="recipe-img w-4/5 h-auto" /> }

            { !isLoading && <h5 className="recipe-title w-[85%] text-slate-800 font-outfit font-bold text-2xl text-start">{data.meals[0].strMeal}</h5> }

            { !isLoading && <span className='recipe-area w-[85%] text-slate-600 font-dm-sans text-sm flex flex-row justify-start items-center gap-x-1'><Globe size={20}/> - {data.meals[0].strArea}</span> }

            <div className="ingredients-wrapper w-[85%] h-auto flex flex-none flex-col justify-evenly items-start gap-y-1">
                <span className="ingredients-header text-slate-800 font-outfit font-bold text-xl">Ingredients</span>
                <ul className="ingredients-list w-full">
                { !isLoading && generateIngredientsArray().map(ingredient => <p className='text-slate-800 font-dm-sans text-sm'>{ingredient}</p>)}
            </ul>
            </div>

            <div className="instructions-wrapper w-[85%] h-auto flex flex-none flex-col justify-evenly items-start gap-y-1">
                <span className="instructions-header text-slate-800 font-outfit font-bold text-xl">Instructions</span>
                { !isLoading && <p className="w-full text-slate-800 font-dm-sans text-sm">{data.meals[0].strInstructions}</p> }
            </div>
        </div>
    )
}

export default RecipeDetails;