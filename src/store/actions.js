import * as actions from './actionTypes';

export const setRoutes = (routes) => ({
  type: actions.SET_ROUTES,
  payload: { routes },
});

export const setRequestError = () => ({
  type: actions.SET_REQUEST_ERROR,
  payload: true,
});
