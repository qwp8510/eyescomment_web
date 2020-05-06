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

export const VideoItem = ( channelDetail ) => {
  const linkUrl = `/eyescomment/video/${channelDetail.videoId}`;
  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <Link to={linkUrl} className="item">
            <img src={channelDetail[0].videoImage} />
          </Link>
        </div>
        <div className="content">
          <div className="header">{channelDetail[0].channelName}</div>
          <div className="meta">
            <a>{channelDetail[0].publishedAt}</a>
          </div>
          <div className="description">
            {channelDetail[0].videoName}
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
      <div className="card">
        <div className="image">
          <Link to={linkUrl} className="item">
            <img src={channelDetail[1].videoImage} />
          </Link>
        </div>
        <div className="content">
          <div className="header">{channelDetail[1].channelName}</div>
          <div className="meta">
            <a>{channelDetail[1].publishedAt}</a>
          </div>
          <div className="description">
            {channelDetail[1].videoName}
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
      <div className="card">
        <div className="image">
          <Link to={linkUrl} className="item">
            <img src={channelDetail[2].videoImage} />
          </Link>
        </div>
        <div className="content">
          <div className="header">{channelDetail.channelName}</div>
          <div className="meta">
            <a>{channelDetail[2].publishedAt}</a>
          </div>
          <div className="description">
            {channelDetail[2].videoName}
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
      <div className="card">
        <div className="image">
          <Link to={linkUrl} className="item">
            <img src={channelDetail[3].videoImage} />
          </Link>
        </div>
        <div className="content">
          <div className="header">{channelDetail.channelName}</div>
          <div className="meta">
            <a>{channelDetail[3].publishedAt}</a>
          </div>
          <div className="description">
            {channelDetail[3].videoName}
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
    </div>
  );
}
