import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './recipe_index';

export const Ingredients = styled.article`

`;

export const Directions = styled.article`

`;

export const Prep = styled.article`

`;

export const PartentSection = styled.section`

`;

export const IngredientsList = ({ ingredient }) => {
  console.log({ingredient});
  return (
    <li>{ingredient}</li>
  )
}

export const PrepList = ({ prep }) => {
  if (prep.length !== 0) {
    return (
      <li>{prep}</li>
    )
  }
}

export const DirectionsList = ({ directions }) => (
    <li>{directions}</li>
);

class RecipeShow extends Component {
  constructor(props) {
    super(props);
    this.renderIngredients = this.renderIngredients.bind(this);
    this.renderPrep = this.renderPrep.bind(this);
    this.renderDirections = this.renderDirections.bind(this);
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

  renderDirections() {
    const directions = this.props.currentRecipe.directions;
    return (
      <div>
        <h2>Directions</h2>
        <ul>
          {directions.map(direction => <IngredientsList key={direction} direction={direction} /> )}
        </ul>
      </div>
    );
  }

  renderPrep() {
    const prep = this.props.currentRecipe.prep;
    return (
      <div>
        <h2>Prep</h2>
        <ul>
          {prep.map(prepSteps => <PrepList key={prepSteps} prep={prepSteps} /> )}
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
          <Prep>{this.renderPrep()}</Prep>
          <Directions>{this.renderDirections()}</Directions>
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
