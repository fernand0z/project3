import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import styled from "styled-components";
import MenuBar from "../MenuBar";
import IntroText from "../IntroText";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Navbar />
        </Wrapper>
        <IntroText />
        <MenuBar />
      </React.Fragment>
    );
  }
}

export default Home;
