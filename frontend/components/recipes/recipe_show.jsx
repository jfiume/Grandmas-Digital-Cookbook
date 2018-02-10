import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
        <div>stuff</div>
      );
    } else {
      return (
        <Loading>loading</Loading>
      )
    }
  }
}

export default RecipeShow;
