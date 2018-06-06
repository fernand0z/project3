import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import Summary from "../Summary";
import Upcoming from "../Upcoming";
import Settings from "../Setting";
// import { slideInDown, zoomIn } from "react-animations";

class MenuBar extends React.Component {
    render() {
    return (
        <React.Fragment>
        <MenuWrapper>
            <MenuTitle1>
                <Link to="/summary" style={{textDecoration: 'none', color: 'white', fontFamily: 'Raleway'}}>Summary</Link>
            </MenuTitle1>
            <MenuTitle2>
                <Link to="/upcoming"style={{textDecoration: 'none', color: 'white', fontFamily: 'Raleway'}} >Upcoming</Link>
            </MenuTitle2>
            <MenuTitle3>
                <Link to="/settings" style={{textDecoration: 'none', color: 'white', fontFamily: 'Raleway' }}>Settings</Link>
            </MenuTitle3>
        </MenuWrapper>
            <div>
                <Switch>
                    <Route path="/summary" component={Summary} />
                    <Route path="/upcoming" component={Upcoming} />
                    <Route path="/settings" component={Settings} />
                    <Redirect from="/" to="/summary" />
                </Switch> 
            </div>
        </React.Fragment>
    );
    }
}

// ========================STYLED-COMPONENTS CSS======================================

const MenuWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    margin-top: -1%;
    align-items: center;
    padding-top: 0%;
`;

const MenuTitle1 = styled.div`
    grid-column: 1;
    grid-row: 1;
    text-align: center;
    padding: 8%;
    font-size: 28px;
    color: white;
    text-decoration: none !important;
    font-weight: bold;
    background-image: linear-gradient(to bottom, #FF057C 0%, #8D0B93 50%, #321575 100%);
`;

const MenuTitle2 = styled.div`
    grid-column: 2;
    grid-row: 1;
    text-align: center;
    text-decoration: none;
    padding: 8%;
    font-size: 28px;
    color: white;
    font-weight: bold;
    background-image: linear-gradient(to bottom, #FF057C 0%, #8D0B93 50%, #321575 100%);
`;

const MenuTitle3 = styled.div`
    grid-column: 3;
    grid-row: 1;
    text-align: center;
    padding: 8%;
    font-size: 28px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    background-image: linear-gradient(to bottom, #FF057C 0%, #8D0B93 50%, #321575 100%);
`;

const ShowTitle = styled.div`
    margin-top: 0;
    font-size: 40px;
    text-align: center;
    background-color: #333;
    color: white;
`;

const ShowImage = styled.img`
    height: 83%;
    float: left;
    margin-left: 1%;
    margin-right: 2%;
    margin-bottom: 2%;
`;

const ShowInfo = styled.div`
    color: #333;
`;

const RemoveBtn = styled.div`
    border: 1px solid #333;
    float: right;
    background-color: green;
    width: 20%;
    height: 10%;
`;

export default MenuBar;

// <React.Fragment>
// <MenuWrapper>

//     <MenuTitle1>Summary</MenuTitle1>
//     <MenuTitle2>Upcoming</MenuTitle2>
//     <MenuTitle3>Settings</MenuTitle3>
// </MenuWrapper>

// </React.Fragment>
