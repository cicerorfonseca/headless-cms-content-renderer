import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const [error, setError] = useState(false);

  const {
    component: { alt, className, height, src },
  } = props;

  const styles = {
    maxHeight: height,
    alignSelf: 'center',
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <Fragment>
      <img
        onError={handleError}
        className={className}
        src={error ? `https://via.placeholder.com/100` : src}
        alt={alt}
        style={styles}
      />
    </Fragment>
  );
};

Image.propTypes = {
  component: PropTypes.object,
};

export default Image;
