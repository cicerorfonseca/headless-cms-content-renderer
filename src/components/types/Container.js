import React from 'react';
import PropTypes from 'prop-types';
import RichText from './RichText';
import Components from '../Components';

const Container = (props) => {
  const {
    component: { className, flexDirection, items, type },
  } = props;

  return (
    <div className={className}>
      {items.map((item, index) => {
        if (item.type === 'rich-text') {
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
  className: PropTypes.string,
  flexDirection: PropTypes.string,
  items: PropTypes.array,
  type: PropTypes.string,
};

export default Container;
