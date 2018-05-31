import React from "react";
// import "./navbar.css";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
import SearchPage from "../SearchPage";
import '../GlobalStyles';
import './animate.css';
// import {Dock} from 'react-dock';

const bounceAnimation = keyframes`${bounce}`;

const Navbar = props => (
  
  <React.Fragment>
    <StyledNav>    
      <NavLeft>
        Fun TV App Name
      </NavLeft>
      <NavGoogleDiv>
        <div className='animated bounceIn'>
        <NavGoogle href="/login/google">Sign in with Google</NavGoogle>
        </div>
      </NavGoogleDiv>

      <SearchPage />
      
      </StyledNav>
  
  </React.Fragment>
);

// =====================================STYLED-COMPONENTS CSS=======================================

const StyledNav = styled.div`
  width: 100%;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  font-size: 20px;
  padding-bottom: 1%;
  padding-top: 1%;
  font-weight: bold;
  color: white;
  box-shadow: 0 6px 20px 0 rgba(200, 200, 200, 0.5);
`;

const NavLeft = styled.div`
  width: 20%;
  font-size: 30px;
  text-align: left;
  float: left;
  padding: 2% 0;
  padding-left: 1%;
`;

const NavGoogleDiv = styled.span`
width: 20%;
float: right;
padding: 2.5% 0;
padding-right: 1%
`;

const NavGoogle = styled.a`
  
  padding: 2%;
  border-radius: 5px;
  font-size: 20px;
  text-align: right;
  text-decoration: none;
  float: right;
  border: 3px solid black;
  margin-top: -1%;
`;

export default Navbar;