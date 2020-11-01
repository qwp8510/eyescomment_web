import React from 'react';
import { get_comment } from '../../actions';
import { connect } from 'react-redux';
import config from './config.json';
import { DetailItem } from './channelItem';
import store from '../../store';


class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.params = {};
  }

  async componentDidMount() {
    const state = store.getState();
    this.params = {
      channelId: `${this.props.history.location.query.channelId}`,
      videoId: `${this.props.history.location.query.videoId}`,
      access_token: state.data.action.payload,
    }
    this.props.get_comment(config.PORTAL_SERVER + 'Redis/commentDetail', this.params)
  }

  apiData = () => {
    if (this.props.api != null) {
      return <DetailItem
        detail={this.props.api.action.payload.data}
        videoData={this.props.location.query}
      />
    } else {
      return 'loading...'
    }
  }

  render() {
    return(
      <div>{this.apiData()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { api: state.api };
};

export default connect(
  mapStateToProps,
  { get_comment }
)(VideoDetails);
