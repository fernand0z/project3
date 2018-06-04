import React from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { slideInDown, zoomIn } from "react-animations";
import PropTypes from "prop-types";

const WrapperCard = styled.div`
  background-color: #777;
  height: auto;
  width: 40%;
  margin-left: 10%;
  margin-top: 3%;
  padding: 3%;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  border: 1px solid #555;
  box-shadow: 5px 10px purple;
  animation: 1s ${props => keyframes`${props.show ? slideInDown : zoomIn}`};
`;

const ShowTitle = styled.div`
  margin-top: 0;
  font-size: 40px;
  text-align: center;
  background-color: #ffffff;
  color: #444;
  width: 100%;
`;

const ShowImage = styled.img`
  height: 83%;
  float: left;
  margin-left: 1%;
  margin-right: 2%;
  margin-bottom: 2%;
`;

const ShowInfo = styled.div`
  color: #333;
`;

const AddButton = styled.button`
color: white;
background-image: linear-gradient(to bottom, #FF057C 0%, #8D0B93 30%, #321575 100%);
border: 0 solid white;
padding: 1% 2%;
font-size: 16px;
margin-left: 1%;
&:hover {
  font-weight: bold;  
  box-shadow: 2px 4px 8px 0 rgba(150, 150, 150, 0.4), 2px 4px 20px 0 rgba(70, 41, 137, 0.4);
};
`;

const RemoveBtn = styled.button`
    border: 1px solid #333;
    float: right;
    background-color: green;
    width: 20%;
    height: 10%;
`;

class ShowCard extends React.Component {
  // static propTypes = {
  //     show: PropTypes.object.required
  // }

static propTypes = {
    data: PropTypes.object.isRequired,
    // onRemove: PropTypes.func.isRequired
}

    return (
      <div>
        <div>
          <WrapperCard>
            <ShowTitle>{show.name}</ShowTitle>
            <ShowImage src={show.image.medium} alt="showImage" />
            <ShowInfo>
              <p>Status: {show.status}</p>
              <p>Network: {show.network.name}</p>
              <p>Day: {show.schedule.days}</p>
              <p>Time: {show.schedule.time}</p>
            </ShowInfo>
            <RemoveBtn>Remove</RemoveBtn>
            </WrapperCard>
        </div>
      </div>
    );
  }
}

export default ShowCard;