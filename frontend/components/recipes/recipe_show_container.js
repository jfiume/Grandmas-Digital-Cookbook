import { connect } from 'react-redux';
import RecipeShow from './recipe_show';
import {
  fetchRecipe
} from '../../actions/recipe_actions';

const mapStateToProps = ({ recipes }) => {
  const recipeId = parseInt(Object.keys(recipes));
  return {
    currentRecipe: recipes[recipeId],
    recipeId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipe: id => dispatch(fetchRecipe(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeShow);
