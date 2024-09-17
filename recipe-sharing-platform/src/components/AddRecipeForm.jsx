import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparationSteps, setPreparationSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!title) errors.title = "Recipe title is required";
    if (!ingredients || ingredients.split('\n').length < 2) {
      errors.ingredients = "At least two ingredients are required";
    }
    if (!preparationSteps) errors.preparationSteps = "Preparation steps are required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ title, ingredients, preparationSteps });
      setTitle("");
      setIngredients("");
      setPreparationSteps("");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 shadow-lg bg-white rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title"
            className="border p-2 w-full rounded-lg shadow-sm md:w-1/2"  
          />
          {errors.title && <span className="text-red-500">{errors.title}</span>}
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Ingredients (one per line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients (one per line)"
            className="border p-2 w-full rounded-lg shadow-sm md:w-1/2"  
          />
          {errors.ingredients && <span className="text-red-500">{errors.ingredients}</span>}
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Preparation Steps</label>
          <textarea
            value={preparationSteps}
            onChange={(e) => setPreparationSteps(e.target.value)}
            placeholder="Preparation Steps"
            className="border p-2 w-full rounded-lg shadow-sm md:w-1/2"  
          />
          {errors.preparationSteps && <span className="text-red-500">{errors.preparationSteps}</span>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold p-2 w-full rounded-lg hover:bg-blue-600 md:w-1/2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
