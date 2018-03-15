import { connect } from 'react-redux';
import { searchRecipe } from '../../actions/recipe_actions';
import SearchIndex from './search_index';
import values from 'lodash/values';

const mapStateToProps = ({recipes}) => ({
  recipes,
  results: values(recipes)
});

const mapDispatchToProps = dispatch => ({
  searchRecipe: query => dispatch(searchRecipe(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
