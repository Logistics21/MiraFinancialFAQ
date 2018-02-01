import React from 'react';
import ArticleItem from './articleItem';

const articleIndex = ({ articleList }) => {
  const len = Object.keys(articleList).length;
  let art = len > 1 ? "articles" : "article";
  
  return (
    <ul className="article-index">
      <h2>FAQ</h2>
      <h5>Most common questions our customers have</h5>
      <p>{len} {art} written in this collection</p>
      {Object.keys(articleList).map(id => <ArticleItem key={id} article={articleList[id]} />)}
    </ul>
  )
}

export default articleIndex;
