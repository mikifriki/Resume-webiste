import React, { Component } from "react";
import Cvs from "../Download/Cvs.pdf";
import "../Css/Cv.css";

class Cv extends Component {
  render() {
    return (
      <div className="cvp">
        <embed src={Cvs} className="pdf" />
      </div>
    );
  }
}

export default Cv;
