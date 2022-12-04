// import { Action } from '../actions';

const ActionType = {
  LOGIN : 'login',
  LOGOUT : 'logout',
}

// interface UserAuthState {
//   user: null | string;
//   token: null | string;
// }

const initialState = {
  user: null,
  token: null,
};

const reducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { user: action.payload[0], token: action.payload[1]};
    case ActionType.LOGOUT:
      return { user: null, token: null};
    default:
      return state;
  }
};

export default reducer;
