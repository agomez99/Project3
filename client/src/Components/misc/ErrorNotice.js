import React from "react";
import '../../App.css';

export default function ErrorNotice(props) {
  return (
    <div className="error-notice">
      <span>{props.message}</span>
      <br></br>
      <button className="error-button" onClick={props.clearError}></button>
    </div>
  );
}