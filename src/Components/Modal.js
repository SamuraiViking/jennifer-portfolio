import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import DemoCarousel from './DemoCarousel'
import '../App.scss'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : '#fff',
    border                : 'none',
    padding: '0px'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function MyModal(props){

    return (
      <div>
        <Modal
          isOpen={props.isOpen}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="carousel-container">
            <DemoCarousel />
          </div>
        </Modal>
      </div>
    );
}

export default MyModal;