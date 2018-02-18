import * as sessionUtil from '../util/session_util';

export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const logoutCurrentUser = currentUser => ({
  type: LOGOUT_CURRENT_USER,
  currentUser
});

export const logout = () => dispatch => (
  sessionUtil.logout().then(user => (
    dispatch(logoutCurrentUser(null))
  ))
);
