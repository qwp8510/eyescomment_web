import React from 'react';
import userImg from '../../static/user.png';
import _ from 'lodash';

const commentView = (commentData) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={userImg} alt='null' />
      </a>
      <div className="content">
        <a className="author">{_.get(commentData, 'author')}</a>
        <div className="metadata">
          <span className="date">time:{_.get(commentData, 'updatedAt')}</span>
        </div>
        <div className="metadata">
          <span className="date">情感分析分數: {_.get(commentData, 'sentimentScore', 0).toFixed(2)}</span>
        </div>
        <div className="text">
          {commentData.text}
        </div>
      </div>
    </div>
  )
}

const setCommentView = (detail) => {
  const comments = detail.map(data => {
    return commentView(data)
  })
  return comments
}

export default function GetAuthorCommentsView(commentsDetail) {
  var comments = []
  if (_.get(commentsDetail, 'detail', null) != null) {
    comments = setCommentView(commentsDetail.detail);
  }

  return (
    <div className="ui minimal comments">
      <h3 className="ui dividing header">Comments</h3>
      {comments}
    </div>
  )
};
