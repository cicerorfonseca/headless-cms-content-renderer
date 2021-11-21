import React from 'react';
import PropTypes from 'prop-types';
import Container from './types/Container';
import RichText from './types/RichText';
import Image from './types/Image';

const ComponentsMap = {
  'rich-text': RichText,
  'container': Container,
  'image': Image,
};

const Components = ({ content }) => {
  const { type } = content;

  if (typeof ComponentsMap[type] !== 'undefined') {
    console.log(content);
    return React.createElement(ComponentsMap[type], {
      component: content,
    });
  }
  return React.createElement(() => (
    <div>The component {type} has not been created yet.</div>
  ));
};

Components.propTypes = {
  content: PropTypes.object,
};

export default Components;
