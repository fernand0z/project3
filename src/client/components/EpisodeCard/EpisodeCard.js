import React from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { slideInDown, zoomIn } from "react-animations";
import PropTypes from "prop-types";

render() {

    return (
        <div>
          <div>
            <WrapperCard>
              <ShowTitle>{show.name}</ShowTitle>
              <ShowImage src={show.image.medium} alt="showImage" />
              <ShowInfo>
                <p>Air Date: </p>
                <p>Name: {show.status}</p>
                <p>Number: {show.network.name}</p>
                <p>Summary: {show.schedule.days}</p>
              </ShowInfo>
              {seasons.map((season,index) => {
                return <button onClick ={} key={season[0].id}> Season {index}</button>;
              })}
            </WrapperCard>
          </div>
        </div>
      );
    }
}

export default EpisodeCard.js