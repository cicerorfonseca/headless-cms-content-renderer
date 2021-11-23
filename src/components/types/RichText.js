import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const RichText = (props) => {
  const {
    component: { className, style, text, textType, type },
  } = props;

  const styles = {
    textTransform: style,
  };

  console.log(props);

  const richTextRenderer = () => {
    if (textType === 'html') {
      return parse(text);
    } else if (textType === 'plain') {
      return (
        <p className={className} style={style}>
          {text}
        </p>
      );
    }
  };

  return <Fragment>{richTextRenderer()}</Fragment>;
};

RichText.propTypes = {
  component: PropTypes.object,
};

export default RichText;
