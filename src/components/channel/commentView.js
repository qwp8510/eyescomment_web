import React from 'react';
import userImg from '../../static/user.png';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const commentView = (commentData, videoData) => {
  const linkParameters = {
    pathname: `${'/eyescomment/author/' + commentData.authorChannelId}`,
    query: {
      authorChannelId: `${commentData.authorChannelId}`,
      author: `${commentData.author}`,
      channelId: `${videoData.channelId}`,
    }
  };

  return (
    <div className="comment">
      <a className="avatar">
        <img src={userImg} alt='null' />
      </a>
      <div className="content">
        <Link
            to={linkParameters}
            style={{ color: 'black' }}
            className="item">
              <a className="author">{commentData.author}</a>
        </Link>
        <div className="metadata">
          <span className="date">{commentData.updatedAt}</span>
        </div>
        <div className="metadata">
          <span className="date">sentiment: {_.get(commentData, 'sentimentScore', 0).toFixed(2)}</span>
        </div>
        <div className="text">
          {commentData.text}
        </div>
      </div>
    </div>
  )
}

const setCommentView = (detail, videoData) => {
  const comments = detail.map(data => {
    return commentView(data, videoData)
  })
  return comments
}

export default function GetCommentsView(commentsDetail, videoData) {
  var comments = []
  if (_.get(commentsDetail, 'detail', null) != null) {
    comments = setCommentView(
      commentsDetail.detail, _.get(commentsDetail, 'videoData', {}));
  }

  return (
    <div className="ui minimal comments">
      <h3 className="ui dividing header">Comments</h3>
      {comments}
    </div>
  )
};
