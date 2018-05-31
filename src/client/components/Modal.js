import React from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes, css } from 'styled-components';
import { fadeIn, fadeOut, slideInRight, slideOutRight } from 'react-animations';
import SearchPage from './SearchPage';

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
    this.state = { show: false }
    this.el = document.createElement('div');

    setInterval(() => this.setState(prevState => {
      return { show: !prevState.show };
    }), 3000);
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(
      <Background show={this.state.show}>
        <Tray show={this.state.show}>
          Search input should be below: 
          <SearchPage />
          {this.children}
        </Tray>
      </Background>,
      this.el
    );
  }
}

export default Modal;