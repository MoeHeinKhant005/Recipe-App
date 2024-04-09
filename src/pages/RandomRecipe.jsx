import SingleRecipe from '../components/SingleRecipe';
import Button from '../components/Button';
import { ArrowsClockwise } from '@phosphor-icons/react';

const RandomRecipe = () => {
    return (
        <div className="random-recipe-page w-full h-auto bg-white flex flex-none flex-col justify-evenly items-center gap-y-6 py-6">
            <span className="random-recipe-title text-primary font-outfit font-bold text-2xl">A recipe you should try - </span>
            <SingleRecipe/>
            <Button>
                <ArrowsClockwise size={16}/>
                <span>Generate more</span>
            </Button>
        </div>
    )
}

export default RandomRecipe;