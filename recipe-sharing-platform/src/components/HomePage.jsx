import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 
import recipeData from '../data.json';

const CardLayout = ({ id, title, summary, image }) => {
  return (
    <div className="w-full bg-gray-900 hover:bg-gray-800 rounded shadow overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-80">
        <img src={image} alt={title} className="object-center object-cover w-full h-full" />
      </div>
      <div className="w-full md:w-2/5 text-left p-6 md:p-4 space-y-2">
        <h1 className="text-xl text-white font-bold">{title}</h1>
        <p className="text-base leading-relaxed text-gray-500 font-normal">{summary}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  const recipeCards = recipes.map((recipe) => (
    <Link
      key={recipe.id}
      to={`/recipe/${recipe.id}`} // Set the link to the recipe detail page
      className="no-underline" // Optional: remove underline from links
    >
      <CardLayout
        id={recipe.id}
        title={recipe.title}
        summary={recipe.summary}
        image={recipe.image}
      />
    </Link>
  ));

  return (
    <div className="w-full bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h1 className="text-base font-bold text-indigo-600">RECIPES</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipeCards}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
