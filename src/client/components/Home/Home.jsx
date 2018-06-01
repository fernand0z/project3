import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Navbar';
import Wrapper from '../Wrapper';
import styled from 'styled-components';
import ShowCard from '../ShowCard';
import MenuBar from '../MenuBar';


export default class Home extends Component {
    render() {
    return (
        <React.Fragment>
        <Wrapper>
            <Navbar />
            
            <div>
            <form className='bounceInRight' action='/modal'>
                <input type='submit' value='Gets modal, needs styling' />
            </form>
            </div>
        
        </Wrapper>
        <MenuBar />
        </React.Fragment>
    );
    }
}
