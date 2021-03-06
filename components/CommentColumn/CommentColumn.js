/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import Comment from '../Comment';
import CommentForm from '../CommentForm';
import './CommentColumn.scss';

class CommentColumn extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    commentForm: PropTypes.object,
  };

  render() {
    const commentNodes = this.props.comments.map((comment) => {
      if (comment.text) {
        return (
          <Comment active={comment.active} relativePosition={comment.relativePosition}>
            {comment.text}
          </Comment>
        );
      }

      const handleSubmit = (text) => {
        comment.text = text;
        this.forceUpdate();
      };

      return (
        <CommentForm active={comment.active} relativePosition={comment.relativePosition} submitListener={handleSubmit}/>
      );
    });

    return (
      <ul className="CommentColumn">
        {commentNodes}
      </ul>
    );
  }

}

export default CommentColumn;
