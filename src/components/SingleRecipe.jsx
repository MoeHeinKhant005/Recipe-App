import { Globe } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

const SingleRecipe = ({ recipeData }) => {

    // Navigator
    const navigate = useNavigate();

    return (
        <div className="single-recipe w-4/5 h-auto bg-white flex flex-none flex-col justify-evenly items-center transition-shadow shadow hover:shadow-md md:w-6/12 lg:w-1/4" onClick={() => navigate(`/recipeDetails/${recipeData.idMeal}`)}>
            <img src={recipeData.strMealThumb} alt="*Recipe name*" className="w-full h-auto" />
            <div className="recipe-info w-10/12 h-auto flex flex-none flex-col justify-evenly items-start gap-y-2 py-5">
                <h5 className="recipe-name w-full text-slate-800 font-dm-sans text-base line-clamp-2">{recipeData.strMeal}</h5>
                <span className="recipe-area w-full text-slate-600 font-dm-sans text-sm flex flex-none flex-row justify-start items-center gap-x-1"><Globe size={24} className='text-slate-600'/> - {recipeData.strArea}</span>
            </div>
        </div>
    )
}

export default SingleRecipe;