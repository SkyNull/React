import React from 'react';
import CommentInput from './CommentInput';
import CommenList from './CommenList';

class CommentApp extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  handleSubmitComment = (comment) => {
    const { comments } = this.state;
    const commentsCopy = [...comments];
    commentsCopy.push(comment);
    this.setState({ comments: commentsCopy });
    console.log(commentsCopy);
  }

  render() {
    const { comments } = this.state;
    return (
      <div className='wrapper'>
        <CommentInput
          onSubmitComment={this.handleSubmitComment}
        />
        <CommenList comments={comments} />
      </div>
    )
  }
}

export default CommentApp;