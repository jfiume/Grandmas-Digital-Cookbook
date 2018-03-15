import React, { Component } from 'react';
import RecipeIndexItemContainer from '../recipes/recipe_index_item_container';

class SearchIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.searchRecipe();
  }

  render() {
    if (this.props.results.length > 0) {
      const { results } = this.props;
      return (
        <section>
          <ul>
            {results.map(food => <RecipeIndexItemContainer key={food.id} recipe={food}/>)}
          </ul>
        </section>
      )
    } else {
      return <div>loading</div>
    }
  }
}
