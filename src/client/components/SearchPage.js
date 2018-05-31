import React from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { searchShows, trackNewShow } from '../actions';
import styled, { keyframes } from 'styled-components';

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
              <h3>PUT SPINNER HERE</h3> :
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
padding-bottom: 0.2%;
`;

const ResultsUL = styled.ul`
color: white;
padding: 0% 1%;
`;

const ResultA = styled.a`
color: white !important;
text-decoration: none;
margin-right: 2%;
`;

const AddButton = styled.button`
color: white;
background-image: linear-gradient(to bottom, #FF057C 0%, #8D0B93 30%, #321575 100%);
border: 0 solid white;
padding: 1% 2%;
font-size: 16px;
`;

const SearchInput = styled.input`
padding: 1%;
color: white; 
margin: auto;
background-color: rgba(50, 50, 50, 0.4);
border: 1px solid black;
border-radius: 30px;
text-align: center;
width: 100%;
font-size: 18px;
&::-webkit-input-placeholder {
  color: black;
}
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);