import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set((state) => {
    const lowerTerm = term.toLowerCase();
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lowerTerm)
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),
}));

export { useRecipeStore };
