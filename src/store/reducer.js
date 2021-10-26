import * as actions from './actionTypes';

const initialState = {
  loading: false,
  routesError: false,
  routes: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_ROUTES_ERROR:
      return {
        ...state,
        routesError: action.payload,
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
