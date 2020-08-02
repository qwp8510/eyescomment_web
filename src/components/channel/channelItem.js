import React from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../static/user.png';
import { Table, Carousel, Navbar, Nav, Form, Button, NavDropdown, FormControl} from 'react-bootstrap'


// Channel Manu
const channelForm = data => {
  const linkUrl = `/eyescomment/channel/${data.channelId}`;
  return (
    <tr>
      <td >
        <Link to={linkUrl}>
          {data.channelName}
        </Link>
      </td>
      <td width='150px'>
        <Link to={linkUrl}>
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
  return (
    <div className="card">
      <div className="image">
        <Link to={{
          pathname: `${'/eyescomment/video/'+detail.videoId}`,
          query:{videoImage: `${detail.videoImage}`, 
                 videoName: `${detail.videoName}`,
                 videoChannelName: `${detail.channelName}`,
                 videoPath: `${'/eyescomment/video/'+detail.videoId}`
                }
        }}
          className="item">
          <img src={detail.videoImage || "Null"} alt="Null" />
        </Link>
      </div>
      <div className="content">
        <div className="header">{detail.videoName}</div>
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

// Video Comment
const commentVideoStream = videoData => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={videoData.videoData.videoImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{videoData.videoData.videoName}</h3>
          <p>{videoData.videoData.videoChannelName}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

const searchForm = () => {
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
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
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

export const DetailItem = (detail, videoData) => {
  var detailList = [];
  for (var data of detail) {
    detailList.push(commentForm(data))
  }

  return (
    <div className="ui minimal comments">
      {commentVideoStream({videoData})}
      {searchForm()}
      <h3 className="ui dividing header">Comment</h3>
      {detailList}
    </div>
  )
}
