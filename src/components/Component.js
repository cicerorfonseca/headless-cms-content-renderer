import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Component = ({ component }) => {
  useEffect(() => {
    fetchRoutes();
  });

  const fetchRoutes = () => {
    axios
      .get(`${URL}/${component}`)
      .then((res) => {
        // dispatch(actions.setRoutes(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        // dispatch(actions.setRequestError());
        console.log(err.message);
      });
  };

  return <h1>{component}</h1>;
};

Component.propTypes = {
  component: PropTypes.string,
};

export default Component;
