/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Comment.scss';

class Comment extends Component {

  static propTypes = {
    author: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };

  render() {
    return (
      <li className="Comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </li>
    );
  }

}

export default Comment;
