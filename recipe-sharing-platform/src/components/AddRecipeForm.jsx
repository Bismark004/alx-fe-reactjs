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
      // Submit form data
      console.log({ title, ingredients, preparationSteps });
      // Reset form after submission (optional)
      setTitle("");
      setIngredients("");
      setPreparationSteps("");
    } else {
      setErrors(validationErrors);
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        className="border p-2 w-full rounded-lg"
      />
      {errors.title && <span className="text-red-500">{errors.title}</span>}
  
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (one per line)"
        className="border p-2 w-full rounded-lg"
      />
      {errors.ingredients && <span className="text-red-500">{errors.ingredients}</span>}
  
      <textarea
        value={preparationSteps}
        onChange={(e) => setPreparationSteps(e.target.value)}
        placeholder="Preparation Steps"
        className="border p-2 w-full rounded-lg"
      />
      {errors.preparationSteps && <span className="text-red-500">{errors.preparationSteps}</span>}
  
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Submit
      </button>
    </form>
  );
  
}
