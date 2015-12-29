/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './CommentForm.scss';

class CommentForm extends Component {

  static propTypes = {
    relativePosition: PropTypes.number.isRequired,
    submitListener: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleTextInput(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitListener(this.state.text);
  }

  render() {
    const relativePositioning = {
      position: 'absolute',
      top: this.props.relativePosition,
    };


    return (
      <li className="Comment CommentForm" style={relativePositioning}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleTextInput.bind(this)}
                 placeholder="Enter comment here"
          />
          <br/>
          <button type="submit">Add Comment</button>
          <div className="clearfix"></div>
        </form>
      </li>
    );
  }

}

export default CommentForm;
