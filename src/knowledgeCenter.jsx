import React, { Component } from 'react';
import ArticleIndex from './articleIndex';

class KnowledgeCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: null
    };
  }

  render () {
    const { collections } = this.state;
    return (!collections) ? null : <ArticleIndex articleList={collections} />
  }
}

export default KnowledgeCenter;
