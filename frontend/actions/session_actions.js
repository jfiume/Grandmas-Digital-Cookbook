import * as sessionUtil from '../util/session_util';

export const RECIEVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';

export const recieveCurrentUser = currentUser => ({
  type: RECIEVE_CURRENT_USER,
  currentUser
});

export const logout = () => dispatch => (
  sessionUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
