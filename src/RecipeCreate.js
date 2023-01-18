import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
    const initialFormState = { name: "", cuisine: "", photo: "", ingredients: "", preparation: "" };
  
  const [recipe, setRecipe] = useState({...initialFormState})
  const handleRecipeChange = ({ target }) => {
    setRecipe({
      ...recipe,
      [target.name]: target.value,
    });
  };
   

  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submitted: ', recipe)
    addRecipe({...recipe})
    setRecipe({...initialFormState})
    
  }

  return (
    <form name = 'create' onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name= 'name' placeholder= 'Name' onChange={handleRecipeChange} value={recipe.name}/></td>
            <td><input name= 'cuisine' placeholder= 'Cuisine' onChange={handleRecipeChange} value={recipe.cuisine}/></td>
            <td><input name= 'photo' placeholder= 'Photo' onChange={handleRecipeChange} value={recipe.photo}/></td>
            <td><textarea name= 'ingredients' placeholder= 'Ingredients' onChange={handleRecipeChange} value={recipe.ingredients}/></td>
            <td><textarea name= 'preparation' placeholder= 'Preparation' onChange={handleRecipeChange} value={recipe.preparation}/></td>
            <td><button type="submit">Create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
