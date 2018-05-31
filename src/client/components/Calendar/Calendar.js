import React, { Component } from 'react';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';
import { connect } from 'react-redux';


const Calendar = props => (
    <Wrapper>
    <StopTouchPropagation>
      <CalendarContainer>
        <Row>
          <CalendarHeaderCell />
          <CalendarHeaderCell date={startDate} />
          <CalendarHeaderCell date={addDays(startDate, 1)} />
          <CalendarHeaderCell date={addDays(startDate, 2)} />
          <CalendarHeaderCell date={addDays(startDate, 3)} />
          <CalendarHeaderCell date={addDays(startDate, 4)} />
          <CalendarHeaderCell date={addDays(startDate, 5)} />
          <CalendarHeaderCell date={addDays(startDate, 6)} />
        </Row>
        {relevantShows.map((show, index) => (
          <CalendarShowRow
            key={show.id}
            demo={demo}
            show={show}
            startDate={startDate}
            endDate={endDate}
            isLastRow={index === shows.length - 1}
          />
        ))}
        {relevantShows.length === 0 && (
          <NoShowsThisWeek>
            Sorry, no new shows airing this week!
          </NoShowsThisWeek>
        )}
      </CalendarContainer>
    </StopTouchPropagation>
  </Wrapper>
  );
  
  export default Calendar;
  