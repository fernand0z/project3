import React, { Component } from 'react';
import "./Home.css";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";


export default class Home extends Component {
    render() {
        return (
        <React.Fragment>
        <Wrapper>
        
            <Navbar>
        Navbar should be above (with button)
        </Navbar>
        
        </Wrapper>
        </React.Fragment>
        );
    };
}


