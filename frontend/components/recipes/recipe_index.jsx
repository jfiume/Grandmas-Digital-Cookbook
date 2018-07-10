import styled from 'styled-components';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RecipeIndexItemContainer from './recipe_index_item_container';

// defining styled components
export const Loading = styled.div`

`;

const AllRecipes = styled.section`
`;

const Recipes = styled.ul`
  columns: 2;
  margin: auto;
  margin-left: 40px;
  top: 60px;
  position: relative;
`;
// end styled components

class RecipeIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.fetchRecipes) {
      this.props.fetchRecipes();
    }
  }

  render() {
    if (this.props.recipes && Object.keys(this.props.recipes).length > 0) {
      const { recipes } = this.props;

      return (
        <AllRecipes>
          <Recipes>
            {Object.values(recipes).map(food => <RecipeIndexItemContainer key={food.id} recipe={food} />)}
          </Recipes>
        </AllRecipes>
      );
    } else {
      return (
        <Loading>loading</Loading>
      );
    }
  }
}

export default RecipeIndex;
