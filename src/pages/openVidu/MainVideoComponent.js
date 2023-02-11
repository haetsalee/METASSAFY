import React, { Component } from 'react';
import styled from 'styled-components';
import OpenViduVideoComponent from './OvVideo';
import './UserVideo.css';

export default class MainVideoComponent extends Component {
  getNicknameTag() {
    // Gets the nickName of the user
    return JSON.parse(this.props.streamManager.stream.connection.data)
      .clientData;
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        {this.props.streamManager !== undefined ? (
          <VideoDivStyle>
            <OpenViduVideoComponent
              streamManager={this.props.streamManager}
              name={this.getNicknameTag()}
            />
            {/* <div>
              <p>{this.getNicknameTag()}</p>
            </div> */}
          </VideoDivStyle>
        ) : null}
      </div>
    );
  }
}

const VideoDivStyle = styled.div`
  /* border: 10px gray solid; */
  width: 650px;
  height: 200px;
`;
