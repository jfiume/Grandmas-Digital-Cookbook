import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavHeader from './nav_header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavHeader);
