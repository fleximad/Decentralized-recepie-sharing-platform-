class Recipe {
    constructor(id, name, ingredients, instructions, rating = 0, user = '') {
      this.id = id;
      this.name = name;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.rating = rating;
      this.user = user;
    }
  }
  
  module.exports = Recipe;
  