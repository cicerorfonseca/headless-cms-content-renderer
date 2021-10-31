import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Component = ({ content, component, url }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = () => {
    axios
      .get(`${url}/${content}.json`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(actions.setRequestError());
        console.log(err.message);
      });
  };

  return <h1>{component}</h1>;
};

Component.propTypes = {
  content: PropTypes.string,
  component: PropTypes.string,
  url: PropTypes.string,
};

export default Component;
