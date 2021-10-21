import { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as actions from './store/actions';

import './App.css';

import Navigation from './components/Navigation';

const URL_ROUTES = 'https://raw.githubusercontent.com/cicerorfonseca/headless-cms-content-renderer/main/routes.json';

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = () => {
    axios.get(URL_ROUTES)
    .then((res) => {
      dispatch(actions.setRoutes(res.data));
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

  return (
    <div className="App">
      <Router>
        <header className="header">
          <Link to='/'>
            <h1>Headless CMS Content Renderer</h1>
          </Link>
          <Navigation />
        </header>
      </Router>
    </div>
  );
}

export default App;
