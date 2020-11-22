import React from 'react';
import { getComment } from '../actions';
import { connect } from 'react-redux';
import config from './channel/config.json';
import { DetailItem, SearchMenu, videoStream } from './channel/channelItem';
import store from '../store';
import { uperMenu } from './covers';
import _ from 'lodash';

class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {comments: []};
    this.params = {};
  }

  componentDidMount() {
    const state = store.getState();
    this.params = {
      channelId: `${this.props.history.location.query.channelId}`,
      videoId: `${this.props.history.location.query.videoId}`,
      access_token: state.data.action.payload,
    }
    this.setComments();
  }

  setComments = async () => {
    await this.props.getComment(config.PORTAL_SERVER + 'Redis/commentDetail', this.params);
    this.setState({comments: this.props.api.action.payload.data});
  }

  onSearchSubmit = async filterText => {
    var comments = [];
    if (this.props.api != null) {
      comments = this.props.api.action.payload.data;
    }
    filterText = _.toLower(filterText);
    const filterComments = _.filter(comments, comment => {
      return (_.includes(_.toLower(_.get(comment, 'text', '')), filterText) ||
              _.includes(_.toLower(_.get(comment, 'author', '')), filterText))
    });
    this.setState({comments: filterComments});
  };

  apiData = () => {
    if (this.props.api != null) {
      return <DetailItem
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
        {videoStream(this.props.location.query)}
        <SearchMenu
         videoData={this.props.location.query}
         onSubmit={this.onSearchSubmit} />
        {this.apiData()}
        <div>
          <button
            onClick={() => this.setComments()}>
            More
          </button>
        </div>
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
)(VideoDetails);
