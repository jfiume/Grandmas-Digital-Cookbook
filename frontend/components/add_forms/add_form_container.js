import { connect } from 'react-redux';
import AddRecipeForm from './add_form';
import { createRecipe } from '../../actions/recipe_actions';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRecipe: recipe => dispatch(createRecipe(recipe))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRecipeForm);
