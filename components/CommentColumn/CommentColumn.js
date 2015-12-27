/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Comment from '../Comment';
import './CommentColumn.scss';

class CommentColumn extends Component {

  constructor(props) {
    super(props);
    this.state = {data: [
      {id: 1, author: 'First comment', text: 'This is not right'},
      {id: 2, author: 'Second comment', text: 'That\'s better'},
    ]};
  }

  render() {
    const commentNodes = this.state.data.map((comment) => {
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
