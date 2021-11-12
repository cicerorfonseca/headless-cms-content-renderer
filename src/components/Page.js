import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Components from './Components';

const Page = ({ componentContent, componentName, componentUrl }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = () => {
    axios
      .get(`${componentUrl}/${componentContent}.json`)
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => {
        dispatch(actions.setRequestError());
        console.log(err.message);
      });
  };

  console.log(content);

  return (
    <div className={`${componentName.toLowerCase()}-wrapper container`}>
      <h1>{componentName}</h1>
      {content &&
        content.map((block, index) => {
          return <Components key={index} content={block} />;
        })}
    </div>
  );
};

Page.propTypes = {
  componentContent: PropTypes.string,
  componentName: PropTypes.string,
  componentUrl: PropTypes.string,
};

export default Page;
