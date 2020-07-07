import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../static/user.png';


export const ChannelItem = ({ channelName, channelId }) => {
  const linkUrl = `/eyescomment/channel/${channelId}`;
  return (
    <div className="ui scondary pointing menu">
      <Link to={linkUrl} className="item">
        {channelName}
      </Link>
      <div className="right menu">
        <Link to={linkUrl} className="item">
          subscriber
        </Link>
      </div>
    </div>
  );
};

const cardForm = ( detail ) => {
  return (
    <div className="card">
      <div className="image">
        <Link to={'/eyescomment/video/'+detail.videoId} className="item">
          <img src={detail.videoImage || "Null"} alt="Null" />
        </Link>
      </div>
      <div className="content">
        <div className="header">{detail.channelName}</div>
        <div className="meta">
          <a>{detail.publishedAt}</a>
        </div>
        <div className="description">
          {detail.videoName}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          reserved
        </span>
        <span>
          <i className="user icon"></i>
          reserved
        </span>
      </div>
    </div>
  );
}

export const VideoItem = ( channelDetail ) => {
  var itemList = [];
  for (var detail of channelDetail) {
    itemList.push(cardForm(detail));
  }
  return (
    <div className="ui link cards">
      {itemList}
    </div> 
  );
}

const commentForm = data => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={userImg} alt='null' />
      </a>
      <div className="content">
        <a className="author">{data.author}</a>
        <div className="metadata">
          <span className="date">{data.updatedAt}</span>
        </div>
        <div className="text">
          {data.text}
        </div>
      </div>
    </div>
  )
}

export const DetailItem = (detail) => {
  var detailList = [];
  for (var data of detail) {
    detailList.push(commentForm(data))
  }

  return (
    <div className="ui minimal comments">
      <h3 className="ui dividing header">Comment</h3>
      {detailList}
    </div>
  )
}
