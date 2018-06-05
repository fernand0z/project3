import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleEpisode } from '../actions';

const Button = styled.button`
  background-color: ${props => props.seen ? '#FF057C' : 'purple'};
  color: ${props => props.seen ? 'white' : 'gray'};
  border-radius: 6px;
  color: white;
  border: none;
  margin-right: 0.4%;
  margin-top: 1%;
  box-shadow: 2px 2px 5px black;
`

const AllButton = styled.button`
background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
  color: ${props => props.seen ? 'white' : 'gray'};
  padding: padding: 0.5%;
  margin-top: .5%;
  color: white;
  font-weight: bold;
  margin-left: 1%;
  border: none;
  margin-right: 0.25%;
  box-shadow: 2px 2px 5px black;
`
const EpisodeButtons = (props) => {
  const { show, toggleEpisode } = props;
  const { episodes, watchedEpisodes } = show;

  let seasons = [];

  Object.values(episodes).forEach(episode => {
    const { season } = episode;
    if(!seasons[season]) seasons[season] = [];
    seasons[season].push(episode);
  });

  const markSeason = (index) => {
    seasons[index].forEach(episode => {
      if(!watchedEpisodes.includes(episode.id)) {
        toggleEpisode(show.id, episode.id);
      }
    });
  }



  return (
    seasons.map((season,index) => (
      <div key={index}>
        {season.map(episode => {
          const {id, season, number, name} = episode;
      
          return (
            
            <Button
              key={id}
              seen={watchedEpisodes.includes(id)}
              onClick={() => toggleEpisode(show.id, id)}>

              S{season}E{number}
            </Button>
            
          )
        })}
        <AllButton onClick={() => markSeason(index)}>All</AllButton>
      </div>
    )
)  )
}

EpisodeButtons.propTypes = {
  show: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEpisode: (showId, episodeId) =>
      dispatch(toggleEpisode({ showId, episodeId })),
  }
}

const ButtonSpan = styled.span`
  
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodeButtons);