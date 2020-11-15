import React from 'react';
import youtubeImg from '../../static/youtube.png';
import { Link } from 'react-router-dom';

export const uperCover = () => {
  return (
    <img src={youtubeImg} alt="Null" style={{ width: '100%' }}/>
  );
}

export const uperMenu = () => {
  const homeLinkUrl = '/';
  const youtubeAnalyzeLinkUrl = '/';
  return (
    <div class="ui secondary  menu">
      <a class="active item">
        <Link to={homeLinkUrl}>Home</Link>
      </a>
      <a class="item">
        <Link to={youtubeAnalyzeLinkUrl}>Youtube Analyze</Link>
      </a>
      <a class="item">
        Reserved
      </a>
    </div>
  );
}