import React from 'react';
import { getComment } from '../actions';
import { connect } from 'react-redux';
import config from './channel/config.json';
import GetCommentsView from './channel/commentView';
import store from '../store';
import { uperMenu } from './covers';
import _ from 'lodash';

class AuthorCommentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {comments: []};
    this.params = {};
  }

  componentDidMount() {
    const state = store.getState();
    this.params = {
      database: 'comment-chinese',
      collection: `comment-${this.props.history.location.query.channelId}`,
      parameter: {authorChannelId: `${this.props.history.location.query.authorChannelId}`},
      access_token: state.data.action.payload,
    }
    this.setComments();
  }

  setComments = async () => {
    await this.props.getComment(config.PORTAL_SERVER + 'Mongodbs/commentDetail', this.params);
    console.log('comment data:', this.props);
    this.setState({comments: this.props.api.action.payload.data});
  }

  commentsView = () => {
    if (this.props.api != null) {
      return <GetCommentsView
        detail={this.state.comments}
        videoData={this.props.location.query}
      />
    } else {
      return 'loading...'
    }
  }

  render() {
    return(
      <div>
         {uperMenu()}
          <h2 className="ui dividing header">以下為此使用者在你的頻道所有留言</h2>
         {this.commentsView()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { api: state.api };
  };
  
  export default connect(
    mapStateToProps,
    { getComment }
  )(AuthorCommentPage);
  