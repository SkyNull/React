import React from 'react';
import ReactDOM from 'react-dom';
import PercentageApp from './PercentageApp';

class commentApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };

    this.
  }

  onDeleteComment = (id) => {
    // ...
  }

  render() {
    return (
      <commentList comments={this.state.comments} onDeleteComment={this.onDeleteComment} />

    );
  }
}

// stack
// heap

// variable: named container
// value: 
//  primitive: string, number, undefined, null, boolean
//  reference: object array|function|date|regex ...

// parameter list, placeholder, variable
function fn() {
  // LFS： left hand side
  // RFS： right hand side

  // assignment statement
  let xx = this.props.id;
  console.log(xx);
}

// argument list
fn(1);

// comments[{ id, content }, ...], onDeleteComment
class commentList extends React.Component {
  //
  render() {
    return <div>
      {
        this.props.comments.map((comment) => {
          <comment id={comment.id} onDeleteComment={this.props.onDeleteComment}/>
        })
      }
    </div>
  }
}

// props: id, content, onDeleteComment
class comment extends React.Component {
  
  // handleDeleteComent = () => {
  //   if(this.props.onDeleteComment) {
  //     this.props.onDeleteComment(this.props.id);
  //   }
  // }

  render() {
    return <div onClick={() => { this.props.onDeleteComment(this.props.id) }}>
      {this.props.content}
    </div>;
  }
}

ReactDOM.render(
  <PercentageApp />,
  document.getElementById('root')
)