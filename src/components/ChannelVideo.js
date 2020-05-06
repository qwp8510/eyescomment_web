import React from 'react';
import VideoList from './channel/videoList';
import {VideoItem} from './channel/channelItem';

export class ChannelVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {channelId: this.props.match.params.id, data: []}
  }

  async componentDidMount() {
    let renderedList = []
    await VideoList(this.state.channelId).then(value => {
      function collect_renderedList() {
        const round = Math.ceil(value.data.length/4);
        for (let i=0; i<round; i++) {
          const channelDetail = value.data.slice(0, 4)
          console.log(channelDetail);
          value.data.splice(0, 4)
          renderedList.push(VideoItem(channelDetail))
        }
        return (
          {renderedList}
        )
      };collect_renderedList()
    });
    this.setState({ data: renderedList });
  }

  render() {
    return (
      <div>{this.state.data}</div>
    );
  }
}