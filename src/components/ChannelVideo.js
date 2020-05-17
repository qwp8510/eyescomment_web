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
    const split_num = 3
    await VideoList(this.state.channelId).then(value => {
      function collect_renderedList() {
        const round = Math.ceil(value.data.length/split_num);
        for (let i=0; i<round; i++) {
          const channelDetail = value.data.slice(0, split_num)
          value.data.splice(0, split_num)
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