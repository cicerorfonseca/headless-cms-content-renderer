import * as actions from './actionTypes';

const initialState = {
  loading: false,
  requestError: false,
  routes: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_REQUEST_ERROR:
      return {
        ...state,
        requestError: action.payload,
      };
    case actions.SET_ROUTES:
      return {
        ...state,
        routes: action.payload.routes,
      };
    default:
      return state;
  }
}
