import * as type from './types';

export const LoginUser = () => ({
  type: type.SIGN_IN,
});

export const signOutUser = () => ({
  type: type.SIGN_OUT,
});
