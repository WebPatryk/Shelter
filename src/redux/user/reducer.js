import * as type from './types';

const loginReducer = (state = false, action) => {
  switch (action.type) {
    case type.SIGN_IN:
      return !state;
    case type.SIGN_OUT:
      return !state;
    default:
      return state;
  }
};

export default loginReducer;
