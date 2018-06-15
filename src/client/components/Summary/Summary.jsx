import React from "react";
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { searchShows, trackNewShow } from '../../actions';
import styled, { keyframes } from 'styled-components';
import spinnergif from '../images/spinner.gif';
import ShowCard from '../ShowCard/Showcard.jsx';


class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: '' }
    }

render() {
    const {query} = this.state;
    let {trackedShows } = this.props;
    trackedShows = Object.values(trackedShows);
    return (
        <SummaryDiv>
            {trackedShows.map(show => {
            // const show = kv[1];
            return <ShowCard key={show.id} show={show} />
            })}
        </SummaryDiv>

    )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    searchResult: state.searchResult.data,
    updating: state.searchResult.updating,
    trackedShows: state.trackedShows
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    searchShows: (query) => dispatch(searchShows(query)),
    trackNewShow: (show) => dispatch(trackNewShow(show))
    }
}
// =====================================STYLED-COMPONENTS CSS=======================================
const SummaryDiv=styled.div`
width: 100%;
height: 100%;
background: linear-gradient(270deg, purple, #ffffff, purple, #06002f, purple);
    background-size: 500% 500%;
    height: 100%;
    background: linear-gradient(270deg, #06002f, #06002f, rgba(38, 110, 150), rgba(38, 110, 150), rgba(31, 29, 29), rgba(31, 29, 29));
    background-size: 700% 700%;
    -webkit-animation: AnimationName 59s ease infinite;
    -moz-animation: AnimationName 59s ease infinite;
    animation: AnimationName 59s ease infinite;
            
    @-webkit-keyframes AnimationName {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
    
    @-moz-keyframes AnimationName {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
    
    @keyframes AnimationName {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
margin: auto;
padding-bottom: 100%;
text-align: center;
align-items: center;
padding-top: 2%;

`;
const ResultDiv = styled.div`
background-color: rgba(50, 50, 50, 0.4);
padding: 0.5%;
float: center;
margin-right: -2%;
padding-bottom: 0.2%;
`;
const SpinnerImg = styled.img`
height: 150px;
text-align: center;
margin: auto;
margin-top: 2%;
padding: 1%;;
`;
const ResultsUL = styled.ul`
color: white;
padding: 0% 1%;
`;
const ResultA = styled.a`
color: white !important;
text-decoration: none;
margin-right: 2%;
&:hover {
  -webkit-animation: mymove 5s infinite;
    animation: mymove 1s infinite;
    @keyframes mymove {
      50% {letter-spacing: 1px;}
  };
  text-shadow: 0px 0px 6px rgba(255,255,255,0.7);
  font-size: 21px;
  font-family: 'Libre Franklin', sans-serif;
};
`;
const AddButton = styled.button`
color: white;
background-image: linear-gradient(to bottom, #FF057C 0%, #8D0B93 30%, #321575 100%);
border: none;
padding: 1% 2%;
font-size: 16px;
margin-left: 1%;
&:hover {
  font-weight: bold;
  box-shadow: 2px 4px 8px 0 rgba(150, 150, 150, 0.4), 2px 4px 20px 0 rgba(70, 41, 137, 0.4);
};
`;
const SearchInput = styled.input`
padding: 2%;
color: white;
margin: auto;
background-color: transparent;
border: 2px solid rgba(50, 50, 50, 0.4);
border-radius: 30px;
text-align: center;
width: 100%;
font-size: 18px;
margin-left: -2%;
&::-webkit-input-placeholder {
  color: darkgray;
  font-family: 'Alegreya Sans';
}
`;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
          

// ========================STYLED-COMPONENTS CSS======================================
