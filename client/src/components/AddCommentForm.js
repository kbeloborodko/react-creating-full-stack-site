import React, { useState } from 'react';

const AddCommentForm = ({ articleName, updateCommentsList }) => {
  const [username, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/comments`, {
      method: 'post',
      body: JSON.stringify({  username, text: commentText }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const body = await result.json();

    updateCommentsList(body.comments);

    setUserName('');
    setCommentText('');
  };

  return (
    <div className="bg-light p-3 mb-3">
      <h3>Add Your Comment</h3>
      <div className="form-group">
        <label htmlFor="user-name">Your Name:</label>
        <input type="text" id="user-name" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="comment-text">Your Comment:</label>
        <textarea id="comment-text" rows="3" className="form-control" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
      </div>
      <button className="btn btn-info" onClick={() => addComment()}>Add</button>
    </div>
  );
};

export default AddCommentForm;