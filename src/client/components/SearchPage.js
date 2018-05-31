import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { searchShows, trackNewShow } from '../actions';
import styled, { keyframes } from 'styled-components';
import spinnergif from './images/spinner.gif';


class SearchPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { query: '' }
    this.searchShows = debounce(props.searchShows, 500);
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
    this.searchShows(e.target.value);
  }

  addShow(show) {
    this.props.trackNewShow(show);
  }

  render() {
    const { query } = this.state;
    let { searchResult, updating, trackedShows } = this.props;
    // convert object to array
    trackedShows = Object.values(trackedShows);
    return (
      <React.Fragment>
        <SearchSpan>
          
        <SearchInput type="text"
          value={ query }
          placeholder='Search for Shows'
          onChange={ this.handleChange }
        />
        <ResultsUL>
          {
            updating ?
              <React.Fragment>
              <SpinnerImg src={spinnergif} alt='Please wait' />
              </React.Fragment>
              :
              searchResult.map(show =>
                (
                  <ResultDiv>
                  <p key={ show.id }>
                    <ResultA href={ show.url } target="_blank">{ show.name }</ResultA>
                    <AddButton
                      onClick={() => this.addShow(show)}>
                      Add
                    </AddButton>
                  </p>
                  </ResultDiv>
                )
              )
          }
        </ResultsUL>

        {trackedShows.map(show => {
          // const show = kv[1];
          return <p key={show.id}>{show.name} has {Object.keys(show.episodes).length} episodes</p>
        })}
      </SearchSpan>
      </React.Fragment>
      
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
const SearchSpan= styled.div`
width: 30%;
padding: 2% 0;
margin: auto;
text-align: center;
align-items: center;
justify-content: center;
`;

const ResultDiv = styled.div`
background-color: rgba(50, 50, 50, 0.4);
padding: 0.5%;
float: center;
margin-right: -2%;
padding-bottom: 0.2%;
`;

const SpinnerImg = styled.img`
height: 75px;
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
border: 0 solid white;
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
)(SearchPage);