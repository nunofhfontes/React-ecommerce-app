import React from "react";
import ReactDOM from "react-dom";

class TopBar extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <h1>Shopping List for </h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
export default TopBar;
