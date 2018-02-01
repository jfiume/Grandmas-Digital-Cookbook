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
        <img src="http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/tex-mex-meatballs-red-chile-sauce-sl.jpg?itok=myWf5enj" alt="demo pic" />
        <RecipeAttributes>
          <RecipeName>demo recipe</RecipeName>
        </RecipeAttributes>
      </RecipeIndexLi>
    );
  }
}

export default RecipeIndexItem
