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
import './App.scss';
import Maintenance from './components/Maintenance';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Page from './components/Page';
import Footer from './components/Footer';

// Temporary URL
// const URL =
//   'https://raw.githubusercontent.com/cicerorfonseca/headless-cms-content-renderer/main/content';
const URL = '../../../content';

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = () => {
    axios
      .get(`${URL}/routes.json`)
      .then((res) => {
        dispatch(actions.setRoutes(res.data));
      })
      .catch((err) => {
        dispatch(actions.setRequestError());
        console.log(err.message);
      });
  };

  const routesRenderer = Object.entries(counter.routes).map((key, index) => {
    return (
      <Route
        path={key[0]}
        render={(props) => (
          <Page
            {...props}
            componentContent={key[0]}
            componentName={key[1]}
            componentUrl={URL}
          />
        )}
        key={index}
      />
    );
  });

  // Map first valid route to the proper component
  const mainRoute = () => {
    for (const route in counter.routes) {
      if (Object.hasOwnProperty.call(counter.routes, route)) {
        return <Redirect to={route} />;
        break;
      }
    }
  };

  return (
    <div className='App'>
      <Router>
        <header className='header'>
          <Logo />
          <Navigation routes={counter.routes} />
        </header>
        <Switch>
          {routesRenderer}

          {counter.requestError && (
            <>
              <Route exact path='/maintenance' component={Maintenance} />
              <Route path='/'>
                <Redirect to='/maintenance' />
              </Route>
            </>
          )}

          {/* If the request is valid and route invalid, redirect to the first route available */}
          {mainRoute()}
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
