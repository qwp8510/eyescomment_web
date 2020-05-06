import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ChannelMenu } from './ChannelMenu';
import { ChannelVideo } from './ChannelVideo';

const PageChannel = () => {
  return (
    <div>
      Page PageChannel
      <Link to="/video">Navigate to Video page</Link>
    </div>
  );
};

const PageVideo = () => {
  return <div>PageVideo</div>;
}

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ChannelMenu} />
          <Route path="/eyescomment/video" exact component={PageVideo} />
          <Route path="/eyescomment/channel/:id" exact component={ChannelVideo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;