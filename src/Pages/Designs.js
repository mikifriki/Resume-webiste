import React from 'react';
import '../Css/Design.scss';
import Gallery from 'react-grid-gallery';

/* Impots the const with images */
import { IMAGES } from '../Components/Pics.js';

class Designs extends React.Component {
	render() {
		return (
			<div className="d-flex">
				<div className="gal justify-content-center">
					<h2>Photography and other designs</h2>
					<p className="sub-text">
						Here are some of my pictures and designs. Click on them
						to view them fullscreen
					</p>
					<Gallery
						images={IMAGES}
						enableImageSelection={false}
						margin={10}
						rowHeight={300}
						id={'gru'}
					/>
				</div>
			</div>
		);
	}
}
export default Designs;
