import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { slideInDown, zoomIn } from "react-animations";

const WrapperCard = styled.div`
    background-color: #999;
    height: 300px;
    width: 40%;
    margin-left: 10%;
    margin-top: 3%;
    padding-top: 0;
    border: 1px solid #555;
    box-shadow: 5px 10px green;
    animation: 1s ${props => keyframes`${props.show ? slideInDown : zoomIn}`};
`;

const ShowTitle = styled.div`
    margin-top: 0;
    font-size: 40px;
    text-align: center;
    background-color: #333;
    color: white;
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

const RemoveBtn = styled.button`
    border: 1px solid #333;
    float: right;
    background-color: green;
    width: 20%;
    height: 10%;
`;

class ShowCard extends React.Component {

static propTypes = {
    data: PropTypes.object.isRequired,
    // onRemove: PropTypes.func.isRequired
}

render() {
    console.log(this.props.data);
    return (
    <div>
        <div>
            <WrapperCard>
            <ShowTitle>{this.props.data.name}</ShowTitle>
            <ShowImage src={this.props.data.image.medium} alt="showImage" />
            <ShowInfo>
                <p>Status: {this.props.data.status}</p>
                <p>Network: {this.props.data.network.name}</p>
                <p>Day: {this.props.data.schedule.days}</p>
                <p>Time: {this.props.data.schedule.time}</p>
            </ShowInfo>
            <RemoveBtn>Remove</RemoveBtn>
            </WrapperCard>
        </div>
    </div>
    );
    }
}

export default ShowCard;