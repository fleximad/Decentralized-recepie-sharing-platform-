<a id="readme-top"></a>
<br />
<div align="center">
  <h3 align="center">Decentralized Recipe Sharing Platform</h3>
  <p align="center">
    A decentralized application for submitting, viewing, and rating recipes, powered by Cartesi Rollups technology.
  </p>
</div>

## Overview

The Decentralized Recipe Sharing Platform is a dApp that enables users to submit, rate, and manage recipes on a decentralized network. Leveraging Cartesi Rollups, it ensures secure and efficient data handling for a seamless user experience.

## Features

- **Create Recipes**: Submit new recipes with details including ingredients and instructions.
- **Rate Recipes**: Rate existing recipes to provide feedback.
- **List Recipes**: View a list of all submitted recipes.
- **Get Recipe Details**: Retrieve detailed information about a specific recipe.

## File Structure

```
src/
|-- controller/
|   |-- recipeController.js
|-- model/
|   |-- recipeModel.js
|-- storage/
|   |-- recipeStorage.js
|-- index.js
|-- utils.js
```

- **`recipeModel.js`**: Defines the Recipe data structure.
- **`recipeStorage.js`**: Manages the storage and retrieval of recipes.
- **`recipeController.js`**: Handles recipe creation, rating, listing, and fetching.
- **`index.js`**: Integrates with Cartesi Rollups to manage state and process requests.
- **`utils.js`**: Utility functions for hexadecimal and string conversions.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/fleximad/Decentralized-recepie-sharing-platform-.git
   cd Decentralized-recepie-sharing-platform-
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Build the Project with Cartesi CLI**

   ```bash
   cartesi build
   ```

4. **Start the Cartesi Rollup Server**

   ```bash
   cartesi run
   ```

5. **Start the Application**

   ```bash
   npm start
   ```

## API Endpoints

### Create Recipe

- **Endpoint**: `/create_recipe`
- **Method**: `POST`
- **Payload**:
  
  ```json
  {
    "id": "unique-id",
    "name": "Recipe Name",
    "ingredients": "List of ingredients",
    "instructions": "Cooking instructions",
    "rating": 0,
    "user": "user-address"
  }
  ```

- **Response**: 
  ```json
  {
    "success": true,
    "message": "Recipe created successfully!",
    "recipe": {
      "id": "unique-id",
      "name": "Recipe Name",
      "ingredients": "List of ingredients",
      "instructions": "Cooking instructions",
      "rating": 0,
      "user": "user-address"
    }
  }
  ```

### Rate Recipe

- **Endpoint**: `/rate_recipe`
- **Method**: `POST`
- **Payload**:
  
  ```json
  {
    "id": "unique-id",
    "rating": 5
  }
  ```

- **Response**: 
  ```json
  {
    "success": true,
    "message": "Recipe rated successfully!",
    "recipe": {
      "id": "unique-id",
      "name": "Recipe Name",
      "ingredients": "List of ingredients",
      "instructions": "Cooking instructions",
      "rating": 5,
      "user": "user-address"
    }
  }
  ```

### List Recipes

- **Endpoint**: `/list_recipes`
- **Method**: `GET`

- **Response**:
  ```json
  {
    "recipes": [
      {
        "id": "unique-id",
        "name": "Recipe Name",
        "ingredients": "List of ingredients",
        "instructions": "Cooking instructions",
        "rating": 5,
        "user": "user-address"
      }
      // ... more recipes
    ]
  }
  ```

### Get Recipe

- **Endpoint**: `/get_recipe/{id}`
- **Method**: `GET`

- **Response**:
  ```json
  {
    "recipe": {
      "id": "unique-id",
      "name": "Recipe Name",
      "ingredients": "List of ingredients",
      "instructions": "Cooking instructions",
      "rating": 5,
      "user": "user-address"
    }
  }
  ```

## Rollups API Integration

The dApp utilizes the Cartesi Rollups API for:

- **Building**: Compile and prepare the project for deployment.
- **Running**: Execute the dApp in the Cartesi Rollup environment.
- **State Management**: Handle recipe creation, rating, and querying through Cartesi Rollups.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the Repository**
2. **Create a New Branch**: `git checkout -b feature/your-feature`
3. **Commit Your Changes**: `git commit -am 'Add new feature'`
4. **Push to Your Branch**: `git push origin feature/your-feature`
5. **Open a Pull Request** on GitHub

For major changes or new features, please open an issue first to discuss your ideas.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

fleximadubuchi - [fleximadubuchi@gmail.com](mailto:fleximadubuchi@gmail.com) - [GitHub](https://github.com/fleximadubuchi)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
