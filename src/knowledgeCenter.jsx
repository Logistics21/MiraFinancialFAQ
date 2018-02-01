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
      
      /*
      Sample AJAX request to fetch collections obj from back end
      fetch("http://api.mirafinancial.com/knowledgecenter/collections")
      .then(res => res.json())
      .then(resJson => {
        const [collections] = resJson.response;
        this.setState({ collections: collections })
      })
      */

      this.setState({ collections: SAMPLEDATA });
    }
  }

  render () {
    const { collections } = this.state;
    return (!collections) ? null : <ArticleIndex articleList={collections} />
  }
}

export default KnowledgeCenter;
