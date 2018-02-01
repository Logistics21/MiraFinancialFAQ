import React, { Component } from 'react';
import SAMPLEDATA from './sampleData';
import ArticleIndex from './articleIndex';

class KnowledgeCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: null
    };
  }

  componentDidMount() {
    if (!this.state.collections) {
      this.setState({ collections: SAMPLEDATA });
    }
  }
  
  render () {
    const { collections } = this.state;
    return (!collections) ? null : <ArticleIndex articleList={collections} />
  }
}

export default KnowledgeCenter;
