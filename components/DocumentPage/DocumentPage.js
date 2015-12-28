/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import rangy from 'rangy';
import rangyClassApplier from 'rangy/lib/rangy-classapplier';

import './DocumentPage.scss';

class DocumentPage extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    textSelectCallback: PropTypes.func.isRequired,
  };

  selectedText() {
    const selection = rangy.getSelection();
    // Check there is effectively a text selection, not just a cursor being placed
    if (!selection.isCollapsed) {
      const selectionId = Math.floor((1 + Math.random()) * 0x10000);
      const applier = rangyClassApplier.createClassApplier('highlight', {
        elementAttributes: {id: selectionId},
      });
      applier.toggleSelection();

      // Fire callback to trigger adding of a comment
      this.props.textSelectCallback(selectionId, selection.toString());
    }
  }

  render() {
    return (
      <div className="DocumentPage" onMouseUp={this.selectedText.bind(this)}>
        {this.props.children}
      </div>
    );
  }

}

export default DocumentPage;
