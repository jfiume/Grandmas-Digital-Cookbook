import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './recipe_index';

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
      return (
        <div>this is working {recipe.title}</div>
      );
    } else {
      return (
        <Loading>loading</Loading>
      )
    }
  }
}

export default RecipeShow;
