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
  width: 85%;
  margin-left: 10%;
  margin-top: 3%;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 1.5%;
  border: 1px solid #555;
  box-shadow: 5px 10px purple;
  animation: 1s ${props => keyframes`${props.show ? slideInDown : zoomIn}`};
`;

const ShowTitle = styled.div`
  margin-top: 0;
  font-size: 60px;
  text-align: center;
  background-color: #2079b0;
  color: #999;
  width: 100%;
`;

const ShowImage = styled.img`
  height: 10%;
  float: left;
  margin-left: 0;
  margin-right: 2%;
`;

const ShowInfo = styled.div`
  color: #333;
  text-align: center;
`;

const AddButtons = styled.button`
  color: white;
  background-image: linear-gradient(
    to bottom,
    #ff057c 0%,
    #8d0b93 30%,
    #321575 100%
  );
  border: 0 solid white;
  padding: 1% 2%;
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
`;

class ShowCard extends React.Component {
  static propTypes = {
    show: PropTypes.object.isRequired
  };

  render() {
    const { show, untrackShow } = this.props;

    return (
      <div>
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
