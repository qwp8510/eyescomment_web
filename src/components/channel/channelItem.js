import React from 'react';
import { Link } from 'react-router-dom';

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
    <div class="comment">
      <a class="avatar">
        <img src="/images/avatar/small/matt.jpg" alt='null' />
      </a>
      <div class="content">
        <a class="author">{data.author}</a>
        <div class="metadata">
          <span class="date">{data.updatedAt}</span>
        </div>
        <div class="text">
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
    <div class="ui minimal comments">
      <h3 class="ui dividing header">Comment</h3>
      {detailList}
    </div>
  )
}
