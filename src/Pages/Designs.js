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
        <h2 className="hd">Photography and other designs</h2>
        <p className="hds">Here are some of my pictures and designs. Click on them to view them fullscreen</p>
          <Gallery 
          images={IMAGES} 
          enableImageSelection= {false}
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
