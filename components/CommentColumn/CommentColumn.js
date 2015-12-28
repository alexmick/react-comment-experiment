/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import Comment from '../Comment';
import './CommentColumn.scss';

class CommentColumn extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
  };

  render() {
    const commentNodes = this.props.comments.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
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
