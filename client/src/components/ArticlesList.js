import React from 'react';
import Article from './Article';

const gridLayout = itemsList => (
  <div className="row">
    {itemsList.map((item, key) => (
      <div key="key" className="col">
        <Article article={item} />
      </div>
    ))}
  </div>
);

const listLayout = itemsList => (
  <>
    {itemsList.map((item, key) => (
      <Article key={key} article={item} />
    ))}
  </>
);

const articlesList = ({ articles, gridView }) => (
  <>
    {gridView ? gridLayout(articles) : listLayout(articles)}
  </>
);

export default articlesList;