import React from "react";

import "./Contact.css";


class Contact extends React.Component {

  state = {
      online: this.props.online
  }

  changeStatus = () => {
      this.setState({online: !this.state.online})
  }

  render() {
      return (
          <div className="Contact">
              <img className="avatar" src={this.props.img} alt="avatar" />
              <div>
                  <p className="name">{this.props.name}</p>
                  <div className="status">
                      <p className="status-text"><span className={this.state.online ? "status-online" : "status-offline"}></span>{this.state.online ? "Online" : "Offline"}</p>
                      <button onClick={this.changeStatus}>{this.state.online ? "Disconnect" : "Connect"}</button>
                  </div>
              </div>
          </div>
      )
  }
}


export default Contact;
