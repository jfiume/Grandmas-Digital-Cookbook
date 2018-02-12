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

class RecipeShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchRecipe(nextProps.match.params.id);
    }
  }

  render() {
    if (this.props.recipeId === parseInt(this.props.match.params.id)) {
      const recipe = this.props.currentRecipe;
      console.log(recipe.ingredients);
      return (
        <PartentSection>
          <Ingredients>{recipe.ingredients}</Ingredients>
          <Directions>{recipe.directions}</Directions>
        </PartentSection>
      );
    } else {
      return (
        <Loading>loading</Loading>
      )
    }
  }
}

export default RecipeShow;
