/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

import DocumentPage from '../components/DocumentPage';
import Lorem from '../components/Lorem';
import CommentColumn from '../components/CommentColumn';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {comments: [
      {id: 1, author: 'First comment', text: 'This is not right'},
      {id: 2, author: 'Second comment', text: 'That\'s better'},
    ]};
  }

  selectedText(selectionId, selectionText) {
    const newState = this.state;
    newState.comments.push({id: selectionId, author: 'me', text: selectionText});

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h1>My document</h1>
        <DocumentPage textSelectCallback={this.selectedText.bind(this)}>
          <Lorem/>
        </DocumentPage>
        <CommentColumn comments={this.state.comments}/>
      </div>
    );
  }

}

export default Index;
