import React from 'react';
import VideoList from './items/videoList';
import { VideoItem } from './items/channelItem';
import { uperMenu } from './covers';

export class ChannelVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {channelId: this.props.match.params.id, data: []}
  }

  async componentDidMount() {
    let renderedList = []
    const splitNum = 3
    await VideoList(this.state.channelId).then(value => {
      function collectRenderedList() {
        const round = Math.ceil(value.data.length / splitNum);
        for (let i=0; i<round; i++) {
          const channelDetail = value.data.slice(0, splitNum)
          value.data.splice(0, splitNum)
          renderedList.push(VideoItem(channelDetail))
        }
        return (
          {renderedList}
        )
      };collectRenderedList()
    });
    this.setState({ data: renderedList });
  }

  render() {
    return (
      <div>
        {uperMenu()}
        {this.state.data}
      </div>
    );
  }
}