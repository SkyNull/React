import React from 'react';
import Proptypes from 'prop-types';
import Comment from './Comment.js';

class CommentList extends React.Component {

  static protypes = {
    comments: Proptypes.array,
  }

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { comments } = this.props;
    return (
      <div>
        <Comment comments={comments} />
      </div>
    )
  }
}

export default CommentList;