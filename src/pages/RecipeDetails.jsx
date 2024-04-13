import { CaretLeft, Globe } from '@phosphor-icons/react';

const RecipeDetails = () => {
    return (
        <div className="recipe-details w-full h-auto bg-white flex flex-none flex-col justify-start items-center gap-y-4 py-6">
            <CaretLeft size={28} className='text-primary self-start mx-6 my-3'/>

            <img src='https:\/\/www.themealdb.com\/images\/media\/meals\/k29viq1585565980.jpg' alt="" className="recipe-img w-4/5 h-auto" />

            <h5 className="recipe-title w-[85%] text-slate-800 font-outfit font-bold text-2xl text-start">Chicken Quinoa Greek Salad</h5>

            <span className='recipe-area w-[85%] text-slate-600 font-dm-sans text-sm flex flex-row justify-start items-center gap-x-1'><Globe size={20}/> - Greek</span>

            <div className="ingredients-wrapper w-[85%] h-auto flex flex-none flex-col justify-evenly items-start gap-y-1">
                <span className="ingredients-header text-slate-800 font-outfit font-bold text-xl">Ingredients</span>
                <ul className="ingredients-list w-full">
                Ingredients List
            </ul>
            </div>

            <div className="instructions-wrapper w-[85%] h-auto flex flex-none flex-col justify-evenly items-start gap-y-1">
                <span className="instructions-header text-slate-800 font-outfit font-bold text-xl">Instructions</span>
                <p className="w-full text-slate-800 font-dm-sans text-sm">Instructions Text</p>
            </div>
        </div>
    )
}

export default RecipeDetails;