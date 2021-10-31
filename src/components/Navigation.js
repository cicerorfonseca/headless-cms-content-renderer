import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ routes }) => {
  return (
    <ul>
      {Object.entries(routes).map(([key, value], index) => {
        return (
          <li key={index}>
            <Link to={key}>{value}</Link>
          </li>
        );
      })}
    </ul>
  );
};

Navigation.propTypes = {
  routes: PropTypes.object,
};

export default Navigation;
