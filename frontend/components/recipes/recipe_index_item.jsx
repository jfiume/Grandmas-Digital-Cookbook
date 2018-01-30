import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RecipeIndexItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { recipe } = this.props;
    return (
      <li className="recipe-index-item">
        <img src="http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/tex-mex-meatballs-red-chile-sauce-sl.jpg?itok=myWf5enj" alt="demo pic" />
        <article className="attributes">
          <p>demo recipe</p>
        </article>
      </li>
    );
  }
}

export default RecipeIndexItem
