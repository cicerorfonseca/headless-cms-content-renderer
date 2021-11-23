import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.img`
  max-height: ${(props) => props.height}px;
  align-self: center;
`;

const Image = (props) => {
  const [error, setError] = useState(false);
  const {
    component: { alt, className, height, src },
  } = props;

  const handleError = () => {
    setError(true);
  };

  return (
    <Fragment>
      <Content
        onError={handleError}
        className={className}
        src={error ? `https://via.placeholder.com/100` : src}
        alt={alt}
        height={height}
      />
    </Fragment>
  );
};

Image.propTypes = {
  component: PropTypes.object,
};

export default Image;
