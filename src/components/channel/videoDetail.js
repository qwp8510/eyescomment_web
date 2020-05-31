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
    this.params.access_token = state.data.action.payload
    this.props.get_comment(config.PORTAL_SERVER+'Mongodbs/mongoEvent', this.params)
  }

  apiData = () => {
    if (this.props.api != null) {
      return DetailItem(this.props.api.action.payload.data)
    } else {
      return 'loading...'
    }
  }

  render() {
    return(<div>{this.apiData()}</div>)
  }
}

const mapStateToProps = (state) => {
  return { api: state.api };
};

export default connect(
  mapStateToProps,
  { get_comment }
)(VideoDetails);
