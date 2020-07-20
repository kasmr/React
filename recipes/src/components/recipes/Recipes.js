import React, { Fragment, useContext } from 'react';
import RecipeContext from '../../context/recipeContext';

const Recipes = () => {
  const recipeContext = useContext(RecipeContext);

  const { recipes } = recipeContext;

  return (
    <Fragment>
      {recipes.map(recipe => (
        <h3>{recipe.title}</h3>
      ))}
    </Fragment>
  );
};

export default Recipes;
