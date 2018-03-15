import { connect } from 'react-redux';
import { searchRecipe } from '../../actions/recipe_actions';
import SearchItems from './search_items';
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
)(SearchItems);
