import { useState, useEffect } from "react";
import CardLayout from "./CardLayout";
import recipeData from '../data.json';


const HomePage = (props) => {
    const [recipes , setRecipes] = useState('');

    

    useEffect(() => {
        setRecipes(recipeData);
    },[]);

    const recipeCards = recipes.map((recipe) => (
        <CardLayout
        key={recipe.id}
        title={recipe.title}
        summary={recipe.summary}
        image={recipe.image}
    />

    ));



    return (
        <div className="w-full bg-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                  <h1 className="text-base font-bold text-indigo-600">
                    RECIPES
                  </h1>
                </div>

                {recipeCards}

              

                 

            </div>


        </div>

    )
}
export default HomePage;

