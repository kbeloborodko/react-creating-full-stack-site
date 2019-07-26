import React from 'react';

const VotesSection = ({ articleName, votes, updateVotes }) => {
  const voteForArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/votes`, {
      method: 'post',
    });
    const body = await result.json();

    updateVotes(body.votes);
  };

  return (
    <div className="alert alert-info">
      <p>This post has been voted {votes} times.</p>
      <button onClick={() => voteForArticle()} className="btn btn-info">
        Vote for this article!
      </button>
    </div>
  );
};

export default VotesSection;
