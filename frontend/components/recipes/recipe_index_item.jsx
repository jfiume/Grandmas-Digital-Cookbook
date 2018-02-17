import styled from 'styled-components';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// defining styled components
const RecipeIndexLi = styled.li`
  list-style: none;
`;

const RecipeAttributes = styled.article`
  margin-left: 10px;
  margin-top: 10px;
  z-index: 2;
  position: relative;
  top: 40px;
`;

const Pic = styled.img`
  width: 45%;
  height: 50%;
  padding: 5px;
`;

const RecipeName = styled.p`
  text-align: justify;
  font-size: 1.5em;
  position: relative;
  color: white;
  margin: 0px;
  padding: 0px;
  word-break: normal;
  width: 300px;
  text-decoration: none;
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
        <Link to={`/recipes/${recipe.id}`}>
          <RecipeAttributes>
            <RecipeName>{recipe.title}</RecipeName>
          </RecipeAttributes>
          <Pic src={recipe.image_url} alt={recipe.title} />
        </Link>
      </RecipeIndexLi>
    );
  }
}

export default RecipeIndexItem
