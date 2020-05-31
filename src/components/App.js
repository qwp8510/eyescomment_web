import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ChannelMenu from './ChannelMenu';
import { ChannelVideo } from './ChannelVideo';
import { VideoComment } from './VideoComment'
import VideoDetails from './channel/videoDetail';


const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ChannelMenu} />
          <Route path="/eyescomment/channel/:id" exact component={ChannelVideo} />
          <Route path="/eyescomment/video/:id" exact component={VideoDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;