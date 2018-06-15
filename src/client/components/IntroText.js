import React from "react";
import styled from "styled-components";


class IntroText extends React.Component {
    render() {
    return (
        <React.Fragment>
            <IntroWrapper>
                Track your favorite TV shows here.
                <SecondaryText>
                    Start by searching for a show above,<br />
                    or sign-in to view your previously saved shows.
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
    font-size: 28px;
    font-weight: bold;
    background: transparent;
    text-shadow: 0px 0px 20px rgba(8, 80, 120);
`;

const SecondaryText = styled.p`
    font-size: 20px;
    margin-top: 2%;
    text-shadow: 0px 0px 20px rgba(8, 80, 120);
    letter-spacing: .75px;

`;

export default IntroText;
