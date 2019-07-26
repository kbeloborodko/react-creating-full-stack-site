import React from 'react';

const CommentsList = ({ comments }) => (
  <div className="mb-4">
    <h3 className="mb-3">Comments</h3>
    <div className="list-group">
      {comments.map((comment, key) => (
        <div className="list-group-item" key={key}>
          <h4 className="h5">{comment.username}</h4>
          <p className="mb-0">{comment.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CommentsList;
