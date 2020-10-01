import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selected}
      onRequestClose={props.handleClose}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__tilte">Selected Option: </h3>
      {props.selected && <p className="modal__body">{props.selected}</p>}
      <button className="button" onClick={props.handleClose}>OK</button>
    </Modal>
);

export default OptionModal;