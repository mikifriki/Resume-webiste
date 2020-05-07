import React, { Component } from 'react';
import cv from '../Download/Mihkel Liblikman CV.pdf';
import '../Css/Cv.scss';

class Cv extends Component {
	render() {
		return (
			<div>
				<embed src={cv} className="pdf" />
			</div>
		);
	}
}

export default Cv;
