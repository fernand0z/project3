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
        <span className='bounceInRight'> Navbar should be above (with button)</span>
        </Navbar>
        
        </Wrapper>
        </React.Fragment>
        );
    };
}


