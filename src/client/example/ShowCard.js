import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EpisodeButtons from './EpisodeButtons.js';


const ShowCard = (props) => {
  const { show, toggle, untrack } = props;
  const { watchedEpisodes } = show;

  // return <LindseyShowCard show={show}/>
  return (
    <React.Fragment>
      <p>
      {show.name}
      <button onClick={() => untrack(show.id)}>Remove</button>
      </p>

      <ul>
        {
          <EpisodeButtons
            show={show}
          />
        }
      </ul>
    </React.Fragment>
  )
}

ShowCard.propTypes = {
  show: PropTypes.object.isRequired,
  untrack: PropTypes.func.isRequired
}

export default ShowCard;

