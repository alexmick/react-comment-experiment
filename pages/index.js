/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import rangyClassApplier from 'rangy/lib/rangy-classapplier';

import DocumentPage from '../components/DocumentPage';
import Lorem from '../components/Lorem';
import CommentColumn from '../components/CommentColumn';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {comments: []};
  }

  selectedText(selectionId) {
    const newState = this.state;

    // Clear the previous selection if no comment was made
    newState.comments = newState.comments.filter((comment) => {
      if (!comment.text) {
        rangyClassApplier.createClassApplier('highlight').undoToRange(comment.range);
        return false;
      }
      return true;
    });

    const selection = rangyClassApplier.getSelection();
    if (!selection.isCollapsed) {
      // Prepare a new empty comment that will act as the form
      newState.comments.push({
        id: selectionId,
        text: '',
        range: selection.getRangeAt(0),
        relativePosition: document.getElementById(selectionId).getBoundingClientRect().top - React.findDOMNode(this.documentPage).getBoundingClientRect().top + 60,
      });
    }

    // Sort the comments so that the comment form ends in the right place relative to other comments
    newState.comments.sort((comment1, comment2) => {
      const rect1 = document.getElementById(comment1.id).getBoundingClientRect();
      const rect2 = document.getElementById(comment2.id).getBoundingClientRect();
      return (rect1.top !== rect2.top) ? rect1.top - rect2.top : rect1.left - rect2.left;
    });

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h1>My document</h1>
        <DocumentPage ref={(ref) => this.documentPage = ref} textSelectCallback={this.selectedText.bind(this)}>
          <Lorem/>
        </DocumentPage>
        <CommentColumn comments={this.state.comments} />
      </div>
    );
  }

}

export default Index;
