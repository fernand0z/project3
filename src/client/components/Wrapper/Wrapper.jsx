import React from "react";
import "./Wrapper.css";
import styled, { keyframes } from "styled-components";
import video from "../images/beer.mov";
import overlayImg from "../images/pixel-weave.png";

const Wrapper = props => (
    <React.Fragment>
    <div className="wrapper">
            <VideoOverlay />
                <div style={{zIndex: 5}}>
                {props.children}
                </div>
            <BgVideo autoPlay loop id="video-background" muted playsinline>
                <source src={video} type="video/mp4" />
            </BgVideo>
                    
    </div>
    
  </React.Fragment>
);

// =====================================STYLED-COMPONENTS CSS=======================================
const WrapperDiv = styled.div`
  height: 100%;
  
  padding-bottom: 0%;
  padding-top: 50%;
  margin-bottom: 0%;
  margin-left: 0%;
  color: white;
  font-size: 16px;
  
  
  
  background: none;
  
`;

const BgVideo = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: -2;
`;

const VideoOverlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 80vh;
background-image: url(${overlayImg});
background-image: url("https://transparenttextures.com/patterns/ps-neutral.png");
background-repeat: repeat;
z-index: 0;
`;


export default Wrapper;
// background-image: url("../images/static.gif");
// background-repeat: repeat;
