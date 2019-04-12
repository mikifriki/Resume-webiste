import React, { Component } from 'react';

class Post extends Component {
  renderLoadingState = () => (
    <div className="post-loading">
      Post
    </div>
  )

  render() {
    return (
      <div className="post-container">
        {this.renderLoadingState()}
      </div>
    );
  }
}

export default Post;