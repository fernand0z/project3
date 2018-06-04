import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleEpisode } from '../actions';

const Button = styled.button`
  background-color: ${props => props.seen ? 'blue' : 'white'};
  color: ${props => props.seen ? 'white' : 'black'};
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
        <button onClick={() => markSeason(index)}>All</button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodeButtons);