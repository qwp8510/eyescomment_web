import React from 'react';
import ChannelList from './channel/channelList';
import config from './channel/config.json';
import { ChannelItem } from './channel/channelItem';
import { connect } from 'react-redux';
import { login } from '../actions';
import uperCover from './cover/UperCover';
import { Table } from 'react-bootstrap'


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
    await this.props.login('post', config.PORTAL_SERVER + 'Users/login', loginParams);
    this.setState({ data: await this.renderList() });
  }

  renderList = async () => {
    let renderedList = []
    await ChannelList().then(value => {
      renderedList = ChannelItem(value.data)
    });
    return renderedList
  }

  render() {
    return (
      <div>
        {uperCover()}
        <div style={{ height: '90vh', border: '1px solid white', boxShadow: '1px 1px 1px 1px grey'}}>
          <div className="ui relaxed divided list">{this.state.data}</div>
        </div>
      </div>
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