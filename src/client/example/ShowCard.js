import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EpisodeButtons from './EpisodeButtons.js';
import LindseyShowCard from '../components/ShowCard/index.js';


const ShowCard = (props) => {
  const { show, toggle, untrack } = props;
  const { watchedEpisodes } = show;

  return (
    <React.Fragment>
      <p>
      {show.name}
      <button onClick={() => untrack(show.id)}>Remove</button>
      </p>

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

ShowCard.propTypes = {
  show: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  untrack: PropTypes.func.isRequired
}

export default ShowCard;

