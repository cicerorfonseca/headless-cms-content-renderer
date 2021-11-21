import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RichText from './RichText';
import Components from '../Components';
import { device } from '../../devices';

const RICH_TEXT_TYPE = 'rich-text';

const Content = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};

  @media ${device.tablet} {
    flex-direction: ${(props) => props.flexDirectionTablet};
  }
`;

const Container = (props) => {
  const {
    component: {
      className,
      flexDirection,
      flexDirectionTablet,
      flexWrap,
      justifyContent,
      alignItems,
      width,
      items,
    },
  } = props;

  return (
    <Content
      className={className}
      flexDirection={flexDirection}
      flexDirectionTablet={flexDirectionTablet}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
    >
      {items.map((item, index) => {
        if (item.type === RICH_TEXT_TYPE) {
          return <RichText key={index} component={item} />;
        } else {
          return <Components key={index} content={item} />;
        }
      })}
    </Content>
  );
};

Container.propTypes = {
  component: PropTypes.object,
};

export default Container;
