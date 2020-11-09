import React, {Component} from 'react';
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static protypes = {
    onSubmitComment: PropTypes.func,
  }

  constructor() {
    super();
    this.state = {
      username: '',
      content: '',
    };
  }

  handleUserNameChange = (e) => {
    const { value } = e.target;
    this.setState({
      username: value,
    });
  }

  handleCommentContentChange = (e) => {
    const { value } = e.target;
    this.setState({
      content: value,
    })
  }

  handleReleaseButton = () => {
    console.log('xxx');
    const { username, content } = this.state;
    const { onSubmitComment } = this.props;
    if (onSubmitComment) {
      onSubmitComment({
        username,
        content,
        time: this.formatDate(new Date()),
      });
    }
  }

  // 将时间戳转换为标准格式
  formatDate = (now) => {
    const year = now.getFullYear();
    const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
    const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
    const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
    const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();

    return `${year}/${month}/${date} ${hour}:${minute}:${second}`;
  }

  render() {
    const {
      username,
      content,
    } = this.props;
    return (
      <div className="commentInput">
        <div className="form">
          <label>用户名：</label>
          <input placeholder="请输入用户名" value={username} onChange={this.handleUserNameChange} />
        </div>
        <div className="form">
          <label>评论内容：</label>
          <textarea placeholder="请输入评论内容" value={content} onChange={this.handleCommentContentChange} />
        </div>
        <div className="commentButton">
          <button onClick={this.handleReleaseButton}>发布</button>
        </div>
       
      </div>
    )
  }
}

export default CommentInput;