/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Comment.scss';

class Comment extends Component {

  static propTypes = {
    active: PropTypes.bool.isRequired,
    relativePosition: PropTypes.number.isRequired,
    children: PropTypes.string.isRequired,
  };

  render() {
    const relativePositioning = {
      position: 'absolute',
      top: this.props.relativePosition,
    };

    return (
      <li className={'Comment ' + ((this.props.active) ? 'active' : '')} style={relativePositioning}>
        <p>{this.props.children}</p>
      </li>
    );
  }

}

export default Comment;
