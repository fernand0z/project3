import React from "react";
import { connect } from "react-redux";
// import "./navbar.css";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
import SearchPage from "../SearchPage";
import '../GlobalStyles';
import './animate.css';
import logoimg from '../images/Picture1.png';




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
          <SpanRight>{props.user.name} <LogoutButton href='/logout'>Logout</LogoutButton></SpanRight> :
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
  position: fixed;
  background: linear-gradient(rgba(0,0,0,0.90) 5%, rgba(0,0,0,.01)); 
  font-size: 20px;
  padding-bottom: 1%;
  padding-top: 1%;
  font-weight: bold;
  color: white;
  
`;

const Logo = styled.img`
  width: 25%;
  position: fixed;
  margin-top: -3%;
`;
const SpanRight = styled.span`
  color: white;
  font-family: 'Raleway';
`;

const LogoutButton = styled.a`
padding: 2%;
border-radius: 5px;
font-size: 14px;
text-align: right;
text-decoration: none;
float: right;
align-content: center;
color: gray;
margin-top: 0%;
margin-right: 1%;
font-weight: normal;
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
`;

const NavGoogle = styled.a`
  
  padding: 2%;
  border-radius: 5px;
  font-size: 22px;
  text-align: right;
  text-decoration: none;
  float: right;
  color: white;
  margin-top: -1%;
  font-weight: normal;
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
