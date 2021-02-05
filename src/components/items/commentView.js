import React from 'react';
import userImg from '../../static/user.png';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const commentView = (commentData, videoData) => {
  const linkParameters = {
    pathname: `${'/eyescomment/author/' + _.get(commentData, 'authorChannelId')}`,
    query: {
      authorChannelId: `${_.get(commentData, 'authorChannelId')}`,
      author: `${_.get(commentData, 'author')}`,
      channelId: `${_.get(videoData, 'channelId')}`,
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
              <a className="author">{_.get(commentData, 'author')}</a>
        </Link>
        <div className="metadata">
          <span className="date">總留言數:{_.get(commentData, 'commentNum', 'lower then 5')}</span>
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

function compareCommentNumDesc(a, b) {
  if (_.get(a, 'commentNum', 0) < _.get(b, 'commentNum', 0)){
    return 1;
  }
  if (_.get(a, 'commentNum', 0) > _.get(b, 'commentNum', 0)){
    return -1;
  }
  return 0;
}

const setCommentView = (detail, videoData) => {
  detail.sort(compareCommentNumDesc);
  const comments = detail.map(data => {
    return commentView(data, videoData)
  })
  return comments
}

export default function GetCommentsView(commentsDetail) {
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
