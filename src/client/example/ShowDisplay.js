import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EpisodeButtons from './EpisodeButtons.js';



const ShowDisplay = (props) => {
  const { show, toggle } = props;
  const { watchedEpisodes } = show;

  return (
    <React.Fragment>
      <p>{show.name}</p>
      <ul>
        {
          <EpisodeButtons
            episodes={show.episodes}
            watchedEpisodes={watchedEpisodes}
            onClick={(epId) => toggle(show.id, epId)}
          />
        }
      </ul>
    </React.Fragment>
  )
}

ShowDisplay.propTypes = {
  show: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
}

export default ShowDisplay;

