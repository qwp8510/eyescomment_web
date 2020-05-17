import React from 'react';
import { get_comment } from '../../actions';
import { connect } from 'react-redux';
import config from './config.json';
import genApiRequest from '../../actions/apiRequest';
import { DetailItem } from './channelItem';

class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.params = {};
  }

  async componentDidMount() {
    await this.login();
    this.props.get_comment(config.PORTAL_SERVER+'Mongodbs/mongoEvent', this.params)
    console.log('props:', this.props)
  }

  async login() {
    const loginParams = {
      username: config.API_USERNAME,
      password: config.API_PASSWORD
    };
    const request = genApiRequest('login', config.PORTAL_SERVER, loginParams)
    await request.then((token) => {
      this.params.access_token = token.data.id;
    });
  }

  apiData = () => {
    if (this.props.api != null) {
      console.log('in api: ',this.props.api.action.payload.data)
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
  console.log('state: ', state);
  return { api: state.api };
};

export default connect(
  mapStateToProps,
  { get_comment }
)(VideoDetails);
