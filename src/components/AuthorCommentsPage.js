import React from 'react';
import { getComment } from '../actions';
import { connect } from 'react-redux';
import config from './items/config.json';
import GetAuthorCommentsView from './items/authorCommentView';
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
      collection: `comment-${_.get(this.props, 'history.location.query.channelId')}`,
      parameter: {author: `${_.get(this.props, 'history.location.query.author')}`},
      access_token: _.get(state, 'data.action.payload'),
    };
    this.setComments();
  }

  setComments = async () => {
    await this.props.getComment(config.PORTAL_SERVER + 'Mongodbs/commentDetail', this.params);
    this.setState({comments: this.props.api.action.payload.data});
  }

  commentsView = () => {
    if (this.props.api != null) {
      return <GetAuthorCommentsView
        detail={this.state.comments}
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
