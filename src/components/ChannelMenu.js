import React from 'react';
import ChannelList from './channel/channelList';
import config from './channel/config.json';
import { ChannelItem } from './channel/channelItem';
import { connect } from 'react-redux';
import { login } from '../actions';


class ChannelMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentDidMount() {
    const loginParams = {
      username: config.API_USERNAME,
      password: config.API_PASSWORD
    };
    await this.props.login('post', config.PORTAL_SERVER+'Users/login', loginParams);
    this.setState({ data: await this.renderList() });
  }

  renderList = async () => {
    let renderedList = []
    await ChannelList().then(value => {
      renderedList = value.data.map(channelDetail => {
        return (
          <ChannelItem
            channelName={channelDetail.channelName}
            channelId={channelDetail.channelId}
          />
        )
      })
    });
    return renderedList
  }

  render() {
    return (
      <div className="ui relaxed divided list">{this.state.data}</div>
    );
  }
};

const mapStateToProps = (state) => {
  return { accessToken: state.data};
};

export default connect(
  mapStateToProps,
  { login }
)(ChannelMenu);