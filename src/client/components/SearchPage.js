import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { searchShows, trackNewShow } from '../actions';
import styled, { keyframes } from 'styled-components';
import spinnergif from './images/spinner.gif';
import ShowCard from './ShowCard/Showcard.jsx';
class SearchPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { query: '', searching: false }
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
                  <ResultDiv  key={ show.id }>
                  <p>
                    <ResultA href={ show.url } target="_blank">{ show.name }</ResultA>
                    <AddButton
                      onClick={() => this.addShow(show)}>
                      +
                    </AddButton>
                  </p>
                  </ResultDiv>
                )
              )
          }
        </ResultsUL>

      </SearchSpan>

          {/* Remove rendering of card below search results div */}
      {/* // {trackedShows.map(show => { */}
      {/* //   // const show = kv[1];
      //   return <ShowCard key={show.id} show={show} />
      // })} */}
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
margin-right: -17%;
align-content: center;
font-size: 16px;
&:hover {
  -webkit-animation: mymove 5s infinite; 
    animation: mymove 1s infinite;
    @keyframes mymove {
      50% {letter-spacing: 1px;}
  };
  text-shadow: 0px 0px 6px rgba(255,255,255,0.7);
  font-size: 16px;
  font-family: 'Libre Franklin', sans-serif;
};
`;
const AddButton = styled.button`
color: white;

background-color: #330867 !important;
border: none;
padding: .75% 1.85%;
font-size: 14px;
font-weight: bold;
border-radius: 125px;
margin-left: 1%;
float: right;
margin-right: 10%;
&:hover {
  font-weight: bold;  
  box-shadow: 2px 4px 8px 0 rgba(150, 150, 150, 0.4), 2px 4px 20px 0 rgba(70, 41, 137, 0.4);
};
`;
const SearchInput = styled.input`
padding: 1.5%;
color: white; 
margin: auto;
background-color: transparent;
border: 3px solid rgba(50, 50, 50, 0.4);
border-radius: 30px;
text-align: center;
width: 100%;
font-size: 15px;
text-transform: uppercase;
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