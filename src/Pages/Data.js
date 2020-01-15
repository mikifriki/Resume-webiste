import React, { Component } from 'react';
import '../Css/Data.scss';
import PersonList from '../Components/RepoData.js';

class Data extends Component {
	render() {
		return (
			<div className="table">
				<h2 className="head"> Github Repositories</h2>
				<p className="txt">
					Here are most of my github Repositories to view.
					<br />
					To see them in more detail click on their names to go to
					that repositories page or click {''}
					<a className="link" href="https://github.com/mikifriki">
						here
					</a>{' '}
					to visit my github
				</p>
				<PersonList />
			</div>
		);
	}
}

export default Data;
