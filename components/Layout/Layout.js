/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './Layout.scss';
import CommentColumn from '../CommentColumn';

class Layout extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className="Layout" >
        <h1>My document</h1>
        <div className="document">{this.props.children}</div>
        <div className="comments"><CommentColumn /></div>
      </div>
    );
  }

}

export default Layout;
