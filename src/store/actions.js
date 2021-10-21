import * as actions from './actionTypes';

export const setRoutes = (routes) => ({
    type: actions.SET_ROUTES,
    payload: {routes}
});