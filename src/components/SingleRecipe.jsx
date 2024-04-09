import { Globe } from '@phosphor-icons/react';

const SingleRecipe = ({ recipeData }) => {
    return (
        <div className="single-recipe w-4/5 h-auto bg-white flex flex-none flex-col justify-evenly items-center transition-shadow shadow hover:shadow-md md:w-6/12 lg:w-1/4">
            <img src={recipeData.strMealThumb} alt="*Recipe name*" className="w-full h-auto" />
            <div className="recipe-info w-10/12 h-auto flex flex-none flex-col justify-evenly items-start gap-y-1 py-5">
                <h5 className="recipe-name text-slate-800 font-dm-sans text-base truncate">{recipeData.strMeal}</h5>
                <span className="recipe-area text-slate-600 font-dm-sans text-sm flex flex-none flex-row justify-center items-center gap-x-1"><Globe size={24} className='text-slate-600'/> - {recipeData.strArea}</span>
            </div>
        </div>
    )
}

export default SingleRecipe;