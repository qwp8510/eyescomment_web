import React from 'react';
import ChannelList from './channel/channelList';
import ChannelItem from './channel/channelItem';

export class ChannelMenu extends React.Component {
  state = { data: [] }

  async componentDidMount() {
    let renderedList = []
    await ChannelList().then(value => {
      renderedList = value.data.map(channelDetail => {
        return (
          <ChannelItem
            channelName={channelDetail.channelName}
          />
        )
      })
    });
    this.setState({ data: renderedList })
  }

  render() {
    return (
      <div className="ui relaxed divided list">{this.state.data}</div>
    );
  }
  
};