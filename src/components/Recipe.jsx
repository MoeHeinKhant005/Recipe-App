import { Globe } from '@phosphor-icons/react';

const Recipe = () => {
    return (
        <div className="recipe w-[45%] h-auto bg-white flex flex-none flex-col justify-evenly items-center transition-shadow shadow hover:shadow-md md:w-[30%] lg:w-[20%]">
            <img src='https:\/\/www.themealdb.com\/images\/media\/meals\/d8f6qx1604182128.jpg' alt="*Recipe name*" className="w-full h-auto" />
            <div className="recipe-info w-10/12 h-auto flex flex-none flex-col justify-evenly items-start gap-y-2 py-5">
                <h5 className="recipe-name w-full text-slate-800 font-dm-sans text-sm line-clamp-2 text-ellipsis">Japanese Katsudon</h5>
                <span className="recipe-area w-full text-slate-600 font-dm-sans text-xs flex flex-none flex-row justify-start items-center gap-x-1"><Globe size={20} className='text-slate-600'/> - American</span>
            </div>
        </div>
    )
}

export default Recipe;