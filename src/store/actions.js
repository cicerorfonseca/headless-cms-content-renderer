import * as actions from './actionTypes';

export const setRoutes = (routes) => ({
  type: actions.SET_ROUTES,
  payload: { routes },
});

export const setRoutesError = () => ({
  type: actions.SET_ROUTES_ERROR,
  payload: true,
});
