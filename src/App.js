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
        dispatch(actions.setRoutesError());
        console.log(err.message);
      });
  };

  const validRoutes = Object.entries(counter.routes).map((key, value) => {
    let path = key[0];
    let component = key[1];

    return { path, component };
  });

  return (
    <div className='App'>
      <Router>
        <header className='header'>
          <Link to='/'>
            <h1>Headless CMS Content Renderer</h1>
          </Link>
          <Navigation />
        </header>
        <Switch>
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
          <Route path='/' component={Books} />
        </Switch>

        {/* TODO: Validate if the current route is valid, otherwise, redirect the user to /books */}
      </Router>
    </div>
  );
}

export default App;
