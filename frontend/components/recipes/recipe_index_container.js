import { connect } from 'react-redux';
import RecipeIndex from './recipe_index';
import {
  fetchRecipes
} from '../../actions/recipe_actions';

const mapStateToProps = ({recipes}) => {
  return {
    recipes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex);
