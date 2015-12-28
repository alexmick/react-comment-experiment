/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Comment.scss';

class Comment extends Component {

  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  render() {
    return (
      <li className="Comment">
        <p>{this.props.children}</p>
      </li>
    );
  }

}

export default Comment;
