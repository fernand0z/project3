import React from "react";
import "./Wrapper.css";
import styled, { keyframes } from 'styled-components';

const Wrapper = props => ( 
<div className='wrapper'>
{props.children}
    <WrapperDiv>Here's the other wrapperdiv </WrapperDiv>
</div>
);


// =====================================STYLED-COMPONENTS CSS=======================================
const WrapperDiv = styled.div`
height: 100%;
display: flex;
padding-bottom: 0%;
padding-top: 5%;
color: white;
font-size: 16px;
justify-content: space-around;
align-content: flex-start;
overflow: auto;
background-image: url("../images/static.gif");
background-repeat: repeat;
`;

export default Wrapper;
