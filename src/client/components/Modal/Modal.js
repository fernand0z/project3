import React from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes, css } from 'styled-components';
import { fadeIn, fadeOut, slideInRight, slideOutRight } from 'react-animations';
import PropTypes from 'prop-types';
import SearchPage from '../SearchPage'

  // display: ${ props => props.display ? 'block' : 'none' };
const Background = styled.div`
  visibility: ${ props => props.show ? 'visible' : 'hidden' };
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  transition: visibility 1s linear;
  animation: 1s ${props => keyframes`${ props.show ? fadeIn : fadeOut }`};
`;


  // visibility: ${ props => props.show ? 'visible' : 'hidden' };
const Tray = styled.div`
  padding: 20px;
  z-index: 2;
  position: fixed;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
  background-color: white;
  transition: visibility 1s linear;
  animation: 1s ${ props => keyframes`${ props.show ? slideInRight : slideOutRight }` };
`


const modalRoot = document.getElementById('modal-root');

class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.state = { show: false }
  }

  static propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  handleClick = (e) => {
    if(e.target === e.currentTarget) this.props.close();
  }

  render() {
    return createPortal(
      <Background
        show={this.props.show}
        onClick={this.handleClick}>

        <Tray show={this.props.show}>
          {this.props.children}
          <SearchPage />
        </Tray>
      </Background>,
      this.el
    );
  }
}

export default Modal;