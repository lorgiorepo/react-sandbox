import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Country = () => <li>Pop</li>;

class OddOrEven extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Country />
        <Country />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<OddOrEven />, rootElement);
