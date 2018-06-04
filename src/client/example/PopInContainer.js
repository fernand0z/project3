import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { zoomIn } from 'react-animations';

const animation = keyframes`${zoomIn}`;

const Container = styled.div`
  animation: 1s ${animation};
`

class PopInContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired
  }

  render() {
    return (
      this.props.children.map((e,i) => <Container key={i}>{e}</Container>)
    )
  }
}

export default PopInContainer;