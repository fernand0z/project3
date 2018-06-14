import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from "styled-components";

const Upcoming = (props) => {
  const { shows } = props;
  console.log('upcoming compons net');
  const upcomming = Object.values(shows)
    .filter(show => !!show.nextepisode)
    .sort((a, b) =>
      new Date(a.nextepisode.airdate) > new Date(b.nextepisode.airdate));
  // console.log(upcomming)
  

  return (
    <React.Fragment>
      <UpcomingWrapper>
      <h1>Upcoming Episodes</h1>
      {upcomming.map(show => {
        const e = show.nextepisode;
        const summaryP = (show.summary).slice(3, -4);
        console.log('Episode summary' + show.summary);
        return <EpisodeCard key={show.id}>

          <ShowName>{show.name}</ShowName><br />
          <EpisodeName>{e.name}</EpisodeName><br />
          <span>{e.summary}</span>
          <hr />
          Episode Airs: {e.airdate} | Time:{e.airtime}
          <hr /><br />
          <span style={{textAlign: 'center', width: '100%'}}>Show Details</span><br />
          <hr />
          {summaryP}
        </EpisodeCard>
      })}
      </UpcomingWrapper>
    </React.Fragment>
  )
}

const UpcomingWrapper = styled.div`
position: relative;
width: 100%;
padding-left: 3%;
padding-right: 3%;
background: rgba(31, 29, 29);
font-family: 'Montserrat';
color: white;
height: 100vh;
padding-bottom: 35%;
padding-top: 2%;
vertical-align: baseline;
`;

const EpisodeCard = styled.div`
text-align: left;
float: left;
margin: 1%;
margin-bottom: 2%;
background: white;
padding: 2%;
color: rgba(8, 80, 120);
width: 30%;
padding-bottom: 1%;
`;

const ShowName = styled.span`
font-size: 24px;
font-weight: bold;
margin-bottom: 1%;
`;

const EpisodeName = styled.span`
font-size: 20px;
font-weight: bold;
margin-bottom: 1%;

`;


const mapStateToProps = (state) => {
  return {
    shows: state.trackedShows,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upcoming);