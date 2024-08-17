let recipes = [];

function addRecipe(recipe) {
  recipes.push(recipe);
  return recipe;
}

function getRecipe(id) {
  return recipes.find(recipe => recipe.id === id);
}

function getAllRecipes() {
  return recipes;
}

function rateRecipe(id, rating) {
  const recipe = getRecipe(id);
  if (recipe) {
    recipe.rating = rating;
  }
  return recipe;
}

module.exports = {
  addRecipe,
  getRecipe,
  getAllRecipes,
  rateRecipe,
};
