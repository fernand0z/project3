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
      <ShowP>
      {show.name}
      <button onClick={() => untrack(show.id)}>Remove</button>
      </ShowP>

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

const ShowP = styled.p`
color: white;
font-weight: bold;
font-size: 24px;
`;


export default ShowCard;

