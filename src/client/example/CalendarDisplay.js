import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShowCard from './ShowCard.js';

const CalendarDisplay = (props) => {
  const { shows } = props;
  const upcomming = Object.values(shows)
    .filter(show => !!show.nextepisode)

  console.log(upcomming)

  return (
    <React.Fragment>
      <h1>Upcoming Episodes</h1>
      {upcomming.map(show => {
        const e = show.nextepisode;
        return <div key={show.id}>

          <h2>{show.name}: {e.name}</h2>
          Date:{e.airdate} Time:{e.airtime}
        </div>
      })}
    </React.Fragment>
  )
}

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
)(CalendarDisplay);