import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.seen ? 'blue' : 'white'};
  color: ${props => props.seen ? 'white' : 'black'};
`

const EpisodeButtons = (props) => {
  const { episodes, watchedEpisodes, onClick } = props;
  let seasons = [];

  Object.values(episodes).forEach(episode => {
    const { season } = episode;
    if(!seasons[season]) seasons[season] = [];
    seasons[season].push(episode);
  });

  const markSeason = (index) => {
    seasons[index].forEach(episode => onClick(episode.id));
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
              onClick={() => onClick(id)}>

              S{season}E{number}
            </Button>
          )
        })}
        <button onClick={() => markSeason(index)}>All</button>
      </div>
    ))
  )
}

EpisodeButtons.propTypes = {
  episodes: PropTypes.object.isRequired,
  watchedEpisodes: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default EpisodeButtons;