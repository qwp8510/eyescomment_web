import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../static/user.png';
import _ from 'lodash';
import { Table, Carousel, Navbar, Nav, Form, NavDropdown} from 'react-bootstrap'


// Channel Manu
const channelForm = data => {
  const linkUrl = `/eyescomment/channel/${data.channelId}`;
  return (
    <tr>
      <td >
        <Link to={linkUrl} style={{ textDecoration: 'none', color: 'black' }}>
          {data.channelName}
        </Link>
      </td>
      <td width='150px'>
        <Link to={linkUrl} style={{ textDecoration: 'none', color: 'black' }}>
          {data.subscriber}
        </Link>
      </td>
    </tr>
  )
}

export const ChannelItem = channelDetail => {
  var channelList = [];
  for (var data of channelDetail) {
    channelList.push(channelForm(data))
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Channel</th>
          <th>Subscriber</th>
        </tr>
      </thead>
      <tbody>
        {channelList}
      </tbody>
    </Table>
  );
};

// Channel Video
const cardForm = ( detail ) => {
  const linkParameters = {
    pathname: `${'/eyescomment/video/'+detail.videoId}`,
    query: {
      channelId: `${detail.channelId}`,
      videoId: `${detail.videoId}`,
      videoImage: `${detail.videoImage}`,
      videoName: `${detail.videoName}`,
      videoChannelName: `${detail.channelName}`,
      videoPath: `${'/eyescomment/video/'+detail.videoId}`
    }
  }
  return (
    <div className="card">
      <div className="image">
        <Link
          to={linkParameters}
          className="item">
          <img src={detail.videoImage || "Null"} alt="Null" />
        </Link>
      </div>
      <div className="content">
        <div className="header">
          <Link
            to={linkParameters}
            style={{ color: 'black' }}
            className="item">
              {detail.videoName}
          </Link>
        </div>
        <div className="meta">
          <a>{detail.publishedAt}</a>
        </div>
        <div className="description">
          {detail.channelName}
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          reserved
        </span>
        <span>
          <i className="user icon"></i>
          reserved
        </span>
      </div>
    </div>
  );
}

export const VideoItem = ( channelDetail ) => {
  var itemList = [];
  for (var detail of channelDetail) {
    itemList.push(cardForm(detail));
  }
  return (
    <div className="ui link cards">
      {itemList}
    </div> 
  );
}

// Video image
export const videoStream = videoData => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={videoData.videoImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{videoData.videoName}</h3>
          <p>{videoData.videoChannelName}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

const commentForm = data => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={userImg} alt='null' />
      </a>
      <div className="content">
        <a className="author">{data.author}</a>
        <div className="metadata">
          <span className="date">{data.updatedAt}</span>
        </div>
        <div className="text">
          {data.text}
        </div>
      </div>
    </div>
  )
}

const getCommentStream = detail => {
  const comments = detail.map(data => {
    return commentForm(data)
  })
  return comments
}

export function DetailItem(commentsDetail) {
  var comments = []
  if (_.get(commentsDetail, 'detail', null) != null) {
    comments = getCommentStream(commentsDetail.detail);
  }

  return (
    <div className="ui minimal comments">
      <h3 className="ui dividing header">Comments</h3>
      {comments}
    </div>
  )
}

export class SearchMenu extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Reserved</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">clustring</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <form onSubmit={this.onFormSubmit}>
            <div className="field">
              <input
                type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        </Form>
      </Navbar>
    );
  }
}
