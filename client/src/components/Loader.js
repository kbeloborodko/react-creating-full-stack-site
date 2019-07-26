import React from 'react';

const Loader = () => (
  <div className="d-flex align-items-center">
    <strong>Loading...</strong>
    <div
      className="spinner-border ml-auto"
      role="status"
      aria-hidden="true"
    ></div>
  </div>
);

export default Loader;
