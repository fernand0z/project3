import React from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { slideInDown, zoomIn } from "react-animations";
import PropTypes from "prop-types";

import { untrackShow } from "../../actions";

import EpisodeButtons from "../../example/EpisodeButtons.js";

const WrapperCard = styled.div`
  background-image: linear-gradient(to bottom, #eb94d0, #2079b0);
  height: auto;
  width: 45%;
  align-content: center;
  margin-left: 3.5%;
  float: left;
  font-family: 'Raleway';
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 3%;
  color: white;
  margin-bottom: 20%;
  box-shadow: 5px 10px #fc00ff;
  animation: 1s ${props => keyframes`${props.show ? slideInDown : zoomIn}`};
`;

const ShowTitle = styled.div`
 
  font-size: 60px;
  text-align: center;
  background-color: #2079b0;
  color: #white;
  width: 100%;
  margin-bottom: 1%;
  font-weight: bold;  
  text-shadow: 2px 2px 5px black;
`;

const ShowImage = styled.img`
  height: 10%;
  float: left;
  margin-left: 2%;
  margin-top: 1%;
  margin-right: 2%;
  box-shadow: 4px 4px 5px black;
`;

const ShowInfo = styled.div`
  color: #white;
  font-weight: bold;
  text-align: left;
  margin-left: 6%;
  margin-top: 2%;
  text-shadow: 2px 2px 5px black;
`;

const AddButtons = styled.button`
  color: white;
  background-image: linear-gradient(
    to bottom,
    #ff057c 0%,
    #8d0b93 30%,
    #321575 100%
  );
  border: none;
  padding: 1% 2%;
  color: white;
  font-size: 16px;
  margin-left: 1%;
  &:hover {
    font-weight: bold;
    box-shadow: 2px 4px 8px 0 rgba(150, 150, 150, 0.4),
      2px 4px 20px 0 rgba(70, 41, 137, 0.4);
  }
`;

const RemoveBtn = styled.button`
  float: right;
  border: none;
  margin-right: 1%;
  color: white;
  margin-bottom: -10%;
  
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  padding: 0.5%;
  margin-top: 3%;
`;

class ShowCard extends React.Component {
  static propTypes = {
    show: PropTypes.object.isRequired
  };

  

  render() {
    const { show, untrackShow } = this.props;
    let imageURL = show.image.medium || 'http://via.placeholder.com/150x350';
    return (
      
        <div>
          <WrapperCard>
            <ShowTitle>{show.name}</ShowTitle>
            <ShowImage src={show.image.medium} alt="showImage" />
            <EpisodeButtons show={show} />
            <ShowInfo>
              <p>Status: {show.status}</p>
              <p>Network: {show.network && show.network.name}</p>
              <p>Day: {show.schedule && show.schedule.days}</p>
              <p>Time: {show.schedule && show.schedule.time}</p>
            </ShowInfo>
            <RemoveBtn onClick={() => untrackShow(show.id)}>Remove</RemoveBtn>
          </WrapperCard>
        </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    untrackShow: id => dispatch(untrackShow({ id }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCard);
