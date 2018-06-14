import React from "react";
import styled from "styled-components";


class IntroText extends React.Component {
    render() {
    return (
        <React.Fragment>
            <IntroWrapper>
                Track your favorite TV shows here.
                <SecondaryText>
                    Start your search by entering a show above,<br />
                    or login to view your previously saved shows.
                </SecondaryText>
            </IntroWrapper>
        </React.Fragment>
    );
    }
}

// ========================STYLED-COMPONENTS CSS======================================

const IntroWrapper = styled.span`
    position: absolute;
    z-index: 20;
    top: 40vh;
    width: 100%;
    padding-top: 0%;
    color: white;
    align-items: center;
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    background: transparent;
    text-shadow: 0px 0px 15px #321575;
`;

const SecondaryText = styled.p`
    font-size: 28px;
    margin-top: 2%;
    text-shadow: 0px 0px 15px #321575;
    letter-spacing: .75px;
`;

export default IntroText;
