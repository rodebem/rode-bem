export function signInRequest(phone, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { phone, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, phone, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, phone, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
