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
  background: linear-gradient(rgba(0,0,0,0.90) 5%, rgba(0,0,0,.01)); 
  font-size: 20px;
  padding-bottom: 1%;
  padding-top: 1%;
  font-weight: bold;
  color: white;
  
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
  font-family: 'Archivo';
  letter-spacing: 1px;
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
  font-size: 22px;
  text-align: right;
  text-decoration: none;
  float: right;
  color: white;
  margin-top: -1%;
  font-weight: normal;
`;

export default Navbar;