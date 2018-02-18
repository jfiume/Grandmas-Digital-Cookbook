import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './recipe_index';
import { Link } from 'react-router-dom';
import {
  Ingredients,
  Directions,
  Prep,
  ParentSection,
  HeadingSection,
  Pic,
  Title,
  Headers,
} from './recipe_show_styles';

export const IngredientsList = ({ ingredient }) => {
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

export const DirectionsList = ({ direction }) => {
  return (
    <li>{direction}</li>
  )
}

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
        <Headers>Ingredients</Headers>
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
        <Headers>Directions</Headers>
        <ul>
          {directions.map(direction => <DirectionsList key={direction} direction={direction} /> )}
        </ul>
      </div>
    );
  }

  renderPrep() {
    const prep = this.props.currentRecipe.prep;
    if (prep.length !== 0) {
      return (
        <div>
          <Headers>Prep</Headers>
          <ul>
            {prep.map(prepSteps => <PrepList key={prepSteps} prep={prepSteps} /> )}
          </ul>
        </div>
      );
    }
  }

  render() {
    if (this.props.recipeId === parseInt(this.props.match.params.id)) {
      const recipe = this.props.currentRecipe;
      return (
        <ParentSection>
          <Title>{recipe.title}</Title>
          <Pic src={recipe.image_url} alt={recipe.title} />
          <Directions>{this.renderDirections()}</Directions>
          <Ingredients>{this.renderIngredients()}</Ingredients>
          <Prep>{this.renderPrep()}</Prep>
        </ParentSection>
      );
    } else {
      return (
        <Loading>loading</Loading>
      );
    }
  }
}

export default RecipeShow;
