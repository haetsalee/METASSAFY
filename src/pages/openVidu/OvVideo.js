import styled from 'styled-components';
import React, { Component } from 'react';

export default class OpenViduVideoComponent extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    console.log(this.props.name + '00000000000000000000');
  }

  componentDidUpdate(props) {
    if (props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  componentDidMount() {
    if (this.props && !!this.videoRef) {
      this.props.streamManager.addVideoElement(this.videoRef.current);
    }
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'ceneter',
            margin: '5px',
          }}
        >
          <VideoStyle autoPlay={true} ref={this.videoRef} />
          <UserNameStyle>{this.props.name}</UserNameStyle>
        </div>
      </div>
    );
  }
}

const VideoStyle = styled.video`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

const UserNameStyle = styled.div`
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: white;

  width: 100%;

  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;

  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.5);
`;
