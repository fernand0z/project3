import React from "react";
import { createPortal } from "react-dom";
import tvmaze from "tvmaze-api";
import styled, { keyframes } from "styled-components";
import { slideInDown, zoomIn } from "react-animations";

tvmaze.getByQuery("girls", true, ["episodes", "cast"], function(result) {
    console.log(result);
    console.log(result._embedded.episodes[0]);
});

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

const RemoveBtn = styled.div`
    border: 1px solid #333;
    float: right;
    background-color: green;
    width: 20%;
    height: 10%;
`;

class ShowCard extends React.Component {
constructor() {
    super();
    this.state = {
    data: null
    };
}

componentWillMount() {
    tvmaze.getByQuery("girls", true, [], result => {
    this.setState({
        data: result
    });
    });
}

render() {
    console.log(this.state);
    return (
    <div>
        {this.state.data && (
        <div>
            <WrapperCard>
            <ShowTitle>{this.state.data.name}</ShowTitle>
            <ShowImage src={this.state.data.image.medium} alt="showImage" />
            <ShowInfo>
                <p>Status: {this.state.data.status}</p>
                <p>Network: {this.state.data.network.name}</p>
                <p>Day: {this.state.data.schedule.days}</p>
                <p>Time: {this.state.data.schedule.time}</p>
            </ShowInfo>
            </WrapperCard>
            <RemoveBtn />
        </div>
        )}
    </div>
    );
    }
}

export default ShowCard;