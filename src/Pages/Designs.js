import React from "react";
import "../Css/Design.css";
import Gallery from "react-grid-gallery";

/* Impots the const with images */
import { IMAGES } from "../Components/Pics.js";

class Designs extends React.Component {
  render() {
    return (
      <div>
        <div className="gal">
          <Gallery 
          images={IMAGES} 
          margin={10} 
          rowHeight={300} 
          id={"gru"}     
          />
        </div>
      </div>
    );
  }
}
export default Designs;
