import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

function ModalHeading({ children, onClose }) {
  return (
    <div className={styles.modalHeading}>
      <h3>{children}</h3>
      <button onClick={onClose}>X</button>
    </div>
  );
}

function ModalBody({ children }) {
  return <div className={styles.modalBody}>{children}</div>;
}

function Modal({ heading = "", isOpen = false, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalOverlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <ModalHeading onClose={onClose}>{heading}</ModalHeading>
        <ModalBody>{children}</ModalBody>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
