import React from 'react';

function expandArticle(e) {
  let className = e.currentTarget.className;
  if (className.includes("clicked")) {
    e.currentTarget.className = className.replace(" clicked", "");
  } else {
    e.currentTarget.className += " clicked";
  }
}

const ArticleItem = ({ article }) => (
  <li onClick={(e) => expandArticle(e)} className="article-index-item">
    <h5>{article.title}</h5>
    <p><img src={article.authorImg} /> Written by {article.author}</p>
    <p>{article.body}</p>
  </li>
)

export default ArticleItem;
