import React from "react";

import "./Contact.css";

const ifOnline = param => {
  if (param) {
    return (
      <div className="status">
        <p className="status-text">
          <span className="status-online" />
          Online
        </p>
      </div>
    );
  } else {
    return (
      <div className="status">
        <p className="status-text">
          <span className="status-offline" />
          Offline
        </p>
      </div>
    );
  }
};

const Contact = props => {
  return (
    <div className="Contact">
      <img className="avatar" src={props.img} alt="avatar" />
      <div>
        <p className="name">{props.name}</p>
        {ifOnline(props.online)}
      </div>
    </div>
  );
};

export default Contact;
