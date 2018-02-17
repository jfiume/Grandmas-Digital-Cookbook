import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case "":
    default: return state;
  }
}

export default SessionReducer;
