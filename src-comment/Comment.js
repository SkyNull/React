import React from 'react';
import Proptypes from 'prop-types';

class Comment extends React.Component {

  static protypes = {
    comments: Proptypes.array,
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { comments } = this.props;
    return (
      <>
        {
          comments.map((comment, index) => {
            return (
              <div className='comment' key={index}>
                <div className='username'>{`${comment.username}: `}</div>
                <p>{comment.content}</p>
                <span className='deleteIcon'>删除</span>
                <span className='time'>{comment.time}</span>
              </div>
            )
          })
        }
      </>
    )
  }
}

export default Comment;