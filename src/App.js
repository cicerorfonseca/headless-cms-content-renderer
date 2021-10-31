import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as actions from './store/actions';

import './App.css';

// Routes
import Books from './components/pages/Books';
import Bios from './components/pages/Bios';
import Maintenance from './components/pages/Maintenance';

// Components
import Navigation from './components/Navigation';

// Component mapping
const routesRegistry = {
  'Books': Books,
  'Bios': Bios,
};

const URL_ROUTES =
  'https://raw.githubusercontent.com/cicerorfonseca/headless-cms-content-renderer/main/routes.json';

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = () => {
    axios
      .get(URL_ROUTES)
      .then((res) => {
        dispatch(actions.setRoutes(res.data));
      })
      .catch((err) => {
        dispatch(actions.setRequestError());
        console.log(err.message);
      });
  };

  // Make an array from valid routes object
  const validRoutes = Object.entries(counter.routes).map((key, value) => {
    let path = key[0];
    let component = key[1];

    return { path, component };
  });

  // Map first valid route to the proper component
  const mainRoute = () => {
    for (let i = 0; i < validRoutes.length; i++) {
      return <Redirect to={validRoutes[i].path} />;
    }
  };

  return (
    <div className='App'>
      <Router>
        <header className='header'>
          <Link to='/'>
            <h1>Headless CMS Content Renderer</h1>
          </Link>
          <Navigation routes={counter.routes} />
        </header>

        <Switch>
          {/* Render routes from valid routes and map them to the proper component */}
          {validRoutes.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                component={routesRegistry[route.component]}
                key={index}
              />
            );
          })}
          <Route exact path='/maintenance' component={Maintenance} />
          {/* In case of route request error redirect the user */}
          {counter.requestError && (
            <Route path='/'>
              <Redirect to='/maintenance' />
            </Route>
          )}

          {/* If the request is valid and route invalid, redirect to the first route available */}
          {mainRoute()}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
