import React, { Component } from 'react';
import Cvs from '../Download/Cvs.pdf';
import '../Css/Cv.scss';

class Cv extends Component {
	render() {
		return (
			<div>
				<embed src={Cvs} className="pdf" />
			</div>
		);
	}
}

export default Cv;
