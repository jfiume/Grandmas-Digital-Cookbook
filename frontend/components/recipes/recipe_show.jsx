import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './recipe_index';

export const Ingredients = styled.article`

`;

export const Directions = styled.article`

`;

export const PartentSection = styled.section`

`;

export const IngredientsList = ({ ingredient }) => {
  console.log({ingredient});
  return (
    <li>{ingredient}</li>
  )
}

class RecipeShow extends Component {
  constructor(props) {
    super(props);
    this.renderIngredients = this.renderIngredients.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchRecipe(nextProps.match.params.id);
    }
  }

  renderIngredients() {
    const ingredients = this.props.currentRecipe.ingredients;
    return (
      <div>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(ingredient => <IngredientsList key={ingredient} ingredient={ingredient} /> )}
        </ul>
      </div>
    );
  }

  render() {
    if (this.props.recipeId === parseInt(this.props.match.params.id)) {
      const recipe = this.props.currentRecipe;
      return (
        <PartentSection>
          <Ingredients>{this.renderIngredients()}</Ingredients>
          <Directions>{recipe.directions}</Directions>
        </PartentSection>
      );
    } else {
      return (
        <Loading>loading</Loading>
      );
    }
  }
}

export default RecipeShow;
