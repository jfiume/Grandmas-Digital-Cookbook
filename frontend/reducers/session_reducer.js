import merge from 'lodash/merge';

import LOGOUT_CURRENT_USER from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, nullUser,);
    default: return state;
  }
}

export default SessionReducer;
