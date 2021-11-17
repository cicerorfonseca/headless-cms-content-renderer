import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  console.log(props);

  const {
    component: { alt, className, height, src },
  } = props;

  const imageStyles = {
    height: height,
  };

  return (
    <Fragment>
      <img className={className} src={src} alt={alt} style={imageStyles} />
    </Fragment>
  );
};

Image.propTypes = {
  component: PropTypes.object,
};

export default Image;
