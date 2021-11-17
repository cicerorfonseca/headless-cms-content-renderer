import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const RichText = (props) => {
  const {
    component: { classname, style, text, textType, type },
  } = props;

  const richTextRenderer = () => {
    if (textType === 'html') {
      return <Fragment>{parse(text)}</Fragment>;
    } else if (textType === 'plain') {
      return <p>{text}</p>;
    }
  };

  return <div className={classname}>{richTextRenderer()}</div>;
};

RichText.propTypes = {
  component: PropTypes.object,
  classname: PropTypes.string,
  style: PropTypes.string,
  text: PropTypes.string,
  textType: PropTypes.string,
  type: PropTypes.string,
};

export default RichText;
