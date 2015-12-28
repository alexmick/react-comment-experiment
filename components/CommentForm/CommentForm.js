/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import './CommentForm.scss';

class CommentForm extends Component {

  static propTypes = {
    id: PropTypes.int,
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
    return (
      <li className="Comment CommentForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleTextInput.bind(this)}
                 placeholder="Enter comment here"
                 name={'commentText-' + this.props.id} id={'commentText-' + this.props.id}
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
