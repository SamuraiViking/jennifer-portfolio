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

function MyModal(){
  const [IsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={IsOpen}
          onRequestClose={closeModal}
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