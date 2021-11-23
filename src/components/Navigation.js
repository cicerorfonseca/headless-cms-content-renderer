import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navigation = ({ routes }) => {
  const handleMenuClick = () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
  };

  return (
    <Fragment>
      <a
        className='hamburger'
        aria-label='Open main menu'
        onClick={handleMenuClick}
      >
        <span className='sr-only'>Open main menu</span>
        <span className='fas fa-bars' aria-hidden='true'></span>
      </a>
      <nav id='navbar'>
        <div className='navbar-top'>
          <Logo />
          <a
            className='close'
            aria-label='Close main menu'
            onClick={handleMenuClick}
          >
            <span className='sr-only'>Close main menu</span>
            <span className='fas fa-times' aria-hidden='true'></span>
          </a>
        </div>
        <ul>
          {Object.entries(routes).map(([key, value], index) => {
            return (
              <li key={index}>
                <Link to={key} onClick={handleMenuClick}>
                  {value}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

Navigation.propTypes = {
  routes: PropTypes.object,
};

export default Navigation;
