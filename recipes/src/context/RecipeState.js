import React, { useReducer } from 'react';
import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';

const RecipeState = props => {
  const initialState = {
    recipes: [
      {
        id: 1,
        title: 'title',
        calories: 'calories',
        ingredients: 'salad, sausage',
        image: null
      },
      {
        id: 2,
        title: 'title',
        calories: 'calories',
        ingredients: 'sausage',
        image: null
      },
      {
        id: 3,
        title: 'title',
        calories: 'calories',
        ingredients: 'salad',
        image: null
      }
    ]
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ recipes: state.recipes }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
