import React from 'react';
import { Link } from 'react-router-dom';

const ChannelItem = ({ channelName }) => {
  return (
    <div className="ui scondary pointing menu">
      <Link to="/" className="item">
        {channelName}
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          subscriber
        </Link>
      </div>
    </div>
  );
};

export default ChannelItem;