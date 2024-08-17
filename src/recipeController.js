const Recipe = require('./recipeModel');
const { addRecipe, getRecipe, getAllRecipes, rateRecipe } = require('./recipeStorage');
const { hex2string, string2hex } = require('../utils');

async function createRecipe(data) {
  const recipeData = JSON.parse(hex2string(data.payload));
  const newRecipe = new Recipe(recipeData.id, recipeData.name, recipeData.ingredients, recipeData.instructions, recipeData.rating, recipeData.user);
  const addedRecipe = addRecipe(newRecipe);
  return JSON.stringify(addedRecipe);
}

async function updateRecipeRating(data) {
  const { id, rating } = JSON.parse(hex2string(data.payload));
  const updatedRecipe = rateRecipe(id, rating);
  return JSON.stringify(updatedRecipe);
}

async function listRecipes() {
  const recipes = getAllRecipes();
  return JSON.stringify(recipes);
}

async function fetchRecipe(data) {
  const id = hex2string(data.payload);
  const recipe = getRecipe(id);
  return JSON.stringify(recipe);
}

module.exports = {
  createRecipe,
  updateRecipeRating,
  listRecipes,
  fetchRecipe,
};
