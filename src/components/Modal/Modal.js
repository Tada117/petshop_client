import React from "react";
import ReactDom from "react-dom";
import "./modal.scss";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <button onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
