import React from 'react';
import './error.scss';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    console.log(error)
    
  return (
    <div className="error">
      <h1>Opps !</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;