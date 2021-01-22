import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ChannelMenu from './ChannelMenu';
import { ChannelVideo } from './ChannelVideo';
import VideoDetails from './videoDetail';
import AuthorCommentPage from './AuthorCommentsPage';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Route path="/eyescomment" exact component={ChannelMenu} />
          <Route path="/eyescomment/channel/:id" exact component={ChannelVideo} />
          <Route path="/eyescomment/video/:id" exact component={VideoDetails} />
          <Route path="/eyescomment/author/:id" exact component={AuthorCommentPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;