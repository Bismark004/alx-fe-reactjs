import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipeData from '../data.json';

const RecipeDetail = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);
    
    
    useEffect(() => {
        const selectedRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
    }, [id]);

    if (!recipe) return <div>Loading....</div>;

    return (
        <div className='max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-4'>
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
                <h1 className='text-3xl font-bold text-white mb-4'>
                    {recipe.title}
                </h1>

                <img src={recipe.image} alt={recipe.title}
                 className='w-full h-64 object-cover rounded-lg mb-6'
                />

                <h2 className='text-xl text-white font-bold mb-2'>Ingredients</h2>
                <ul className='list-disc list-inside text-gray-400 mb-6'>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))};
                    
                </ul>
                <h2 className="text-xl text-white font-bold mb-2">Instructions</h2>
                <p className="text-gray-300 leading-relaxed">{recipe.instructions}</p>

                
            </div>
        </div>

    )
}
export default RecipeDetail;