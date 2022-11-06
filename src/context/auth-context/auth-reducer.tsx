import { ActionType, actionTypes, AuthStateType } from './auth-actions';

export function authReducer(state: AuthStateType, action: ActionType) {
  switch (action.type) {
    case actionTypes.INIT: {
      return {
        ...state,
        isInit: action.payload,
      };
    }
    case actionTypes.LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }
    case actionTypes.SUCCESS_AUTH: {
      return {
        ...state,
        isAuth: true,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}
