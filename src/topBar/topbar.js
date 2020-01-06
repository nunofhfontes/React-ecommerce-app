import React from "react";
import ReactDOM from "react-dom";

class TopBar extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
