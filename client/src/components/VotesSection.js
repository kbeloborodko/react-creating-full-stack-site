import React from 'react';

const VotesSection = ({ votes }) => (
  <div className="alert alert-info">
    <p>This post has been voted {votes} times.</p>
    <button className="btn btn-info">Vote for this article!</button>
  </div>
);

export default VotesSection;