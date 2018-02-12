import styled from 'styled-components';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// defining styled components
const RecipeIndexLi = styled.li`
  list-style: none;
`;

const RecipeAttributes = styled.article`

`;

const RecipeName = styled.p`
  list-style: none;
  text-align: justify;
  font-size: .8em;
  text-decoration: none;
  color: black;
  margin: 0px;
  padding: 0px;
  word-break: normal;
  width: 300px;
`;
// end styled components

class RecipeIndexItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { recipe } = this.props;
    return (
      <RecipeIndexLi>
        <Link to={`/recipe/${recipe.id}`}>
          <img src={recipe.image_url} alt={recipe.title} />
          <RecipeAttributes>
            <RecipeName>{recipe.title}</RecipeName>
          </RecipeAttributes>
        </Link>
      </RecipeIndexLi>
    );
  }
}

export default RecipeIndexItem
