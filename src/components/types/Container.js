import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';
import Components from '../Components';

const RICH_TEXT_TYPE = 'rich-text';

const Container = (props) => {
  const {
    component: { className, flexDirection, items },
  } = props;

  const containerStyles = {
    display: flexDirection ? 'flex' : 'block',
    flexDirection: flexDirection,
  };

  return (
    <div className={className} style={containerStyles}>
      {items.map((item, index) => {
        if (item.type === RICH_TEXT_TYPE) {
          return <RichText key={index} component={item} />;
        } else {
          return <Components key={index} content={item} />;
        }
      })}
    </div>
  );
};

Container.propTypes = {
  component: PropTypes.object,
};

export default Container;
