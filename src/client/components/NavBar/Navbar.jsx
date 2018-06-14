import React from "react";
import { connect } from "react-redux";
// import "./navbar.css";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
import SearchPage from "../SearchPage";
import '../GlobalStyles';
import './animate.css';
import logoimg from '../images/Picture2.png';

// const request = (props) => {
//   return 
//   gapi.client.plus.people.get({
//   'userId' : props.user.google_id
// });

// request.execute(function(resp) {
//   console.log('ID: ' + resp.id);
//   console.log('Display Name: ' + resp.displayName);
//   console.log('Image URL: ' + resp.image.url);
//   console.log('Profile URL: ' + resp.url);
// })
// };



const bounceAnimation = keyframes`${bounce}`;

const Navbar = props => (
    
  <React.Fragment>
    <StyledNav>    
      <NavLeft>
        <Logo src={logoimg} alt='logo' />
      </NavLeft>
      <NavGoogleDiv>
        <div className='animated bounceIn'>
          {props.user.exists ? 
              <SpanRight>Logged in as  <span style={{fontSize: '14px'}}><b>{props.user.name}</b></span>
                <LogoutButton href='/logout'>Logout</LogoutButton>
              </SpanRight> :
              
              <NavGoogle href="/login/google">Sign in with Google</NavGoogle>
          }
        </div>
      </NavGoogleDiv>

      <SearchPage />
      
      </StyledNav>
        
  </React.Fragment>
);

// =====================================STYLED-COMPONENTS CSS=======================================

const StyledNav = styled.div`
  width: 100%;
  position: absolute;
  background: linear-gradient(rgba(0,0,0, .98) 30%, 
    rgba(0, 0, 0, 0.9) 60%,
    rgba(0, 0, 0, 0.82) 70%,
    rgba(0, 0, 0, 0.75) 75%,
    rgba(0, 0, 0, 0.7) 80%,
    rgba(0, 0, 0, 0.6) 85%,
    rgba(0,0,0,.01)); 
  font-size: 12px;
  padding-bottom: 0%;
  padding-top: 0%;
  font-weight: bold;
  color: white;
  z-index: 50;
  
`;

const Logo = styled.img`
  width: 22%;
  position: absolute;
  margin-left: 1%;
  margin-top: -1.75%;
`;

const SpanRight = styled.span`
  color: white;
  font-family: 'Raleway';
  font-weight: normal;
  text-transform: uppercase;
  
`;

const LogoutButton = styled.a`
padding: 2%;
border-radius: 5px;
font-size: 12px;
text-align: right;
text-decoration: none;
float: right;
align-content: center;
color: rgba(68, 140, 180);
margin-top: 0%;
margin-right: 1%;
font-weight: normal;
text-shadow: 0 0 2px darkgray;
`;

const NavLeft = styled.div`
  color: white;
  width: 20%;
  font-size: 34px;
  text-align: left;
  float: left;
  padding: 2% 0;
  padding-left: 1%;
  margin-top: -.5%;
  font-family: 'Raleway';
  letter-spacing: 1px;
`;

const NavGoogleDiv = styled.span`
width: 20%;
float: right;
padding: 2.5% 0;
padding-right: 1%
fontFamily: 'Raleway';
margin-top: 0.25%;
`;

const NavGoogle = styled.a`
  
  padding: 2%;
  border-radius: 5px;
  font-size: 14px;
  text-align: right;
  text-decoration: none;
  float: right;
  color: white;
  margin-top: -1%;
  font-weight: normal;
  margin-right: 3%;
`;



const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
