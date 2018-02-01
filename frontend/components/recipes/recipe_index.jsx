import styled from 'styled-components';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RecipeIndexItemContainer from './recipe_index_item_container';



class RecipeIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    if (Object.keys(this.props.recipes).length > 0) {
      const { recipes } = this.props;

      return (
        <section className="all-recipes">
          <ul className="recipes">
            {Object.values(recipes).map(food => <RecipeIndexItemContainer key={food.id} recipe={food} />)}
          </ul>
        </section>
      );
    } else {
      return (
        <div>loading</div>
      );
    }
  }
}

export default RecipeIndex;
