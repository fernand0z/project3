import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

import "../GlobalStyles";

const Setting = props => (
    <React.Fragment>
        <SettingsWrapper>
            <LoginDiv>
                <ProfileCard>
                    <h2 style={{textShadow: '1px 1px 3px rgba(0,0,0,.4)'}}>Profile Settings</h2>
                    {props.user.exists ? (
                    <SpanRight>
                        Currently signed-in as {"  "}
                        <span style={{ fontSize: "19px", fontWeight: 'bold', color: 'purple' }}>
                        <b style={{marginLeft: '5px'}}>{props.user.name}</b>
                        </span>
                        <LogoutButton href="/logout">Logout</LogoutButton>
                    </SpanRight>
                    ) : (
                    <NavGoogle href="/login/google">Click to sign-in with Google</NavGoogle>
                    )}
                </ProfileCard>
            </LoginDiv>

                <ProfileCard>
                    <h2 style={{textShadow: '1px 1px 3px rgba(0,0,0,.4)', marginBottom: '0%'}}>Notification Settings</h2>
                        <SpanRight>
                            <span style={{ fontSize: "14px", fontWeight: 'bold', color: 'red', marginTop: '-3%'}}>
                            <b style={{marginLeft: '22%'}}>Coming Soon!</b>
                            </span>
                        </SpanRight>
                </ProfileCard>
            

        </SettingsWrapper>
    </React.Fragment>
);

// =====================================STYLED-COMPONENTS CSS=======================================

const SettingsWrapper = styled.div`
position: relative;
box-sizing: border-box;
width: 100%;
padding-left: 3%;
padding-right: 3%;
background: rgba(31, 29, 29);
font-family: 'Montserrat';
color: white;
height: 100vh;
padding-bottom: 35%;
padding-top: 2%;
vertical-align: baseline;
`;

const SpanRight = styled.span`
  color: black;
  font-family: "Raleway";
  font-weight: normal;
  text-transform: uppercase;
  font-weight: bold;
`;

const LogoutButton = styled.a`
  padding: 2%;
  border-radius: 5px;
  font-size: 12px;
  text-align: right;
  text-decoration: none;
  float: right;
  align-content: center;
  color: white;
  margin-top: 0%;
  margin-right: 1%;
  font-weight: bold;
  letter-spacing: .75px;
  text-shadow: 0 0 2px darkgray;
  background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
`;

const LoginDiv = styled.span`
  width: 100%;
  float: left;
  padding: 2.5% 0;
  padding-right: 1%
  fontFamily: 'Raleway';
  margin-top: 0.25%;
  `;

const NavGoogle = styled.a`
  padding: 2%;
  border-radius: 5px;
  font-size: 19px;
  text-align: right;
  text-decoration: none;
  float: left;
  color: purple;
  margin-top: -1%;
  font-weight: bold;
  margin-right: 3%;
`;

const ProfileCard = styled.div`
text-align: left;
float: center;
margin: 1%;
margin-bottom: 2%;
background: white;
padding: 2%;
color: rgba(8, 80, 120);
width: 50%;
padding-bottom: 4%;
`;

// ==========================REDUX MAPPING STATE AND DISPATCHING===============================
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
