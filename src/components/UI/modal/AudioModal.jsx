import React from 'react';
import ReactDOM from 'react-dom';

import { VscChromeClose } from 'react-icons/vsc';
import styled, { keyframes } from 'styled-components';

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} onClick={props.onClose} />;
// };

const ModalOverlay = (props) => {
  return (
    <ModalStyle>
      <DivStyle>
        <VscChromeClose color="#ADB5BD" onClick={props.onClose} />
      </DivStyle>
      <ModalContentStyle>{props.children}</ModalContentStyle>
    </ModalStyle>
  );
};

const portalElement = document.getElementById('modal-root');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ModalStyle = styled.div`
  position: fixed;
  width: 10rem;
  height: 15rem;
  background-color: aliceblue;
  border: 1px solid #aed5f8;
  border-radius: 10px;
  top: 10%;
  left: 1%;
  z-index: 30;
  animation: ${slideDown} 300ms ease-out forwards;
`;

const DivStyle = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  float: right;
  cursor: pointer;
`;

const ModalContentStyle = styled.div`
  width: 100%;
  height: 100%;
`;
