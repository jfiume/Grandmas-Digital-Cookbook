import { connect } from 'react-redux';
import RecipeIndexItem from './recipe_index_item';

const mapStateToProps = ({session}, ownProps) => {
  return {
    recipe: ownProps.recipe,
    session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndexItem);
