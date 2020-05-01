import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { ChannelMenu } from './ChannelMenu'

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
          <ChannelMenu/>
          <Route path="/" exact component={PageChannel} />
          <Route path="/video"  component={PageVideo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;