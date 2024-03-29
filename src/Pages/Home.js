import React, { Component } from 'react';
import '../Css/Home.scss';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import Designs from './Designs.js';
import mina from '../Images/mina.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
	faAddressCard,
	faBookOpen,
	faBriefcase,
	faCameraRetro,
	faChalkboard,
	faCode,
	faEnvelope,
	faFileWord,
	faGraduationCap,
	faLanguage,
	faLaptopCode,
	faSchool
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cv from '../Download/Mihkel Liblikman CV.pdf';

class Home extends Component {
	renderPost = () => (
		<div>
			<p>
				Multimedia student and a self-learning developer through
				interesting projects.
			</p>
			<p className="made">
				<a
					className="txtint"
					href="https://github.com/mikifriki/Resume-webiste"
					rel="noopener noreferrer"
					target="_blank"
				>
					Made
				</a>{' '}
				with React and React-router...
			</p>
		</div>
	);

	renderIntro = () => (
		<div className="intro">
			Ever since I got my first computer, I have been interested on how to
			do different things on it. It started out as me making simple 2D
			games for myself. As a very curious person this constant
			self-improvement has presisted for many years now. Even when I was
			going to school at Viljandi Kutseõppekeskus to become an Electrician
			I still took part in extra curricular activites like game
			development, IT hobby group and electronics hobby group. I also
			spend a lot of my time trying to code new things and working with
			electronics. Also one of the main point of why I have had this
			interest in programming is because theres always a problem that
			needs solving, even basic ones, and trying to find the most efficent
			way to solve a specific problem is always a nice challange. From
			time to time I like doing{' '}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.instagram.com/mikbix/"
			>
				photography
			</a>{' '}
			and during my free time I also like doing different desings/concepts
			and dabble with which you can check out{' '}
			<HashRouter>
				<NavLink
					exact
					to="./Designs"
					Component={Designs}
					className="intxt"
				>
					{' '}
					here
				</NavLink>
				<br />
			</HashRouter>
			<Switch>
				<Route exact path="/Designs" Component={Designs} />
			</Switch>
			<table className="ul2">
				<tbody>
					<tr>
						<td>Birthday:</td>
						<td>14.04.1998</td>
					</tr>
					<tr>
						<td>City:</td>
						<td>Viimsi</td>
					</tr>
					<tr>
						<td>E-mail:</td>
						<td>mihkel.liblikman@gmail.com</td>
					</tr>
					<tr>
						<td>Phone:</td>
						<td>+372 5040502</td>
					</tr>
				</tbody>
			</table>
		</div>
	);

	renderExtra = () => (
		<div className="extras">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<h2 className="eli">
							<FontAwesomeIcon icon={faBriefcase} size={'xs'} />{' '}
							Work experience
						</h2>
						<ul className="eul">
							<li className="eli">
								Junior front-end developer at Net Group Ltd
							</li>
							<br />
							<li className="eli">
								Projector installation and electrical work at
								Baltnet Communications.
							</li>
							<br />
							<li className="eli">
								Electrician apprenticeship at Viimsi SPA
								(Working with different electrical motors and
								pumps. Also General electrical work).
							</li>
							<br />
						</ul>
					</div>
					<div className="col-md-4">
						<h2 className="eli">
							<FontAwesomeIcon icon={faCode} size={'xs'} />{' '}
							Technical Skills
						</h2>
						<ul className="eul">
							<li className="eli">
								Web development experience (Javascript, HTML,
								CSS, PHP).
							</li>
							<br />
							<li className="eli">
								Familiar with building Electron desktop
								applications.
							</li>
							<br />
							<li className="eli">
								Some experience with libraries like Bootsrap 4,
								React, jquery, Node.js etc.{' '}
							</li>
							<br />
							<li className="eli">
								Adept with Adobe Illustrator, Photoshop.
							</li>
							<br />
							<li className="eli">
								Experimented with Pythons Open CV to recognize
								digits.
							</li>
						</ul>
					</div>
					<div className="col-md-4">
						<h2 className="eli">
							<FontAwesomeIcon
								icon={faGraduationCap}
								size={'xs'}
							/>{' '}
							Education
						</h2>
						<ul className="eul">
							<li className="eli">
								Jun. - Jul. 2019 Net Group summeruniversity
							</li>
							<br />
							<li className="eli">
								{' '}
								2015 – 2018 Viljandi Kutseõppekeskus
								(keskharidus ja lõpetatud elektrikuna).
							</li>
							<br />
							<li className="eli">
								Jun. 2018 ECDL certificate (base module).
							</li>
							<br />
							<li className="eli">
								2018 - 2020 Tallinna Polütehnikum (multimeedia
								spetsialist esimene kursus).
							</li>
						</ul>
					</div>
					<div className="col-md-4">
						<h2 className="eli">
							<FontAwesomeIcon icon={faSchool} size={'xs'} />{' '}
							Extracurricular activites
						</h2>
						<ul className="eul">
							<li className="eli">Game development (2016)</li>
							<br />
							<li className="eli">Electronics (2018)</li>
							<br />
							<li className="eli">IT (2018)</li>
						</ul>
					</div>
					<div className="col-md-4">
						<h2 className="eli">
							<FontAwesomeIcon icon={faLanguage} size={'xs'} />{' '}
							Languages
						</h2>
						<ul className="eul">
							<li className="eli">Estonian (Native)</li>
							<br />
							<li className="eli">
								English – Independent user (B2)
							</li>
							<br />
							<li className="eli">German</li>
						</ul>
					</div>

					<div className="col-md-4">
						<h2 className="eli">
							<FontAwesomeIcon icon={faChalkboard} size={'xs'} />{' '}
							Future ventures(self-learn this year)
						</h2>
						<ul className="eul">
							<li className="eli">
								Learn more about Python's OpenCV image
								recongnition.
							</li>
							<br />
							<li className="eli">
								Create a C# chatbot for my Discord server.
							</li>
							<br />
							<li className="eli">Expand my React knowledge.</li>
							<br />
							<li className="eli">Website Security.</li>
							<br />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);

	renderFooter = () => (
		<div className="footer">
			<h3>Stay connected:</h3>
			<a className="email" href="mailto:mihke.liblikman@gmail.com">
				<FontAwesomeIcon icon={faEnvelope} /> mihkel.liblikman@gmail.com
			</a>
			<div className="icon-bars">
				<a
					href="https://www.instagram.com/mikbix/"
					target="_blank"
					rel="noopener noreferrer"
					className="insta"
				>
					<FontAwesomeIcon icon={faCameraRetro} />
				</a>
				<label className="footlb">Instagram</label>
				<a
					href="https://github.com/mikifriki"
					target="_blank"
					rel="noopener noreferrer"
					className="twitter"
				>
					<FontAwesomeIcon icon={faLaptopCode} />
				</a>
				<label className="footlb">Github</label>
				<a
					href="http://facebook.com/mihkel.liblikman"
					target="_blank"
					rel="noopener noreferrer"
					className="facebook"
				>
					<FontAwesomeIcon icon={faBookOpen} />
				</a>
				<label className="footlb">Facebook</label>
				<a
					href="https://www.linkedin.com/in/mihkel-liblikman-319347174/"
					target="_blank"
					rel="noopener noreferrer"
					className="linkedin"
				>
					<FontAwesomeIcon icon={faBriefcase} />
				</a>
				<label className="footlb">Linkedin</label>
				<a
					href={cv}
					download
					className="twitter"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faFileWord} />
				</a>
				<label className="footlb">My Cv</label>
			</div>
		</div>
	);

	render() {
		return (
			<div>
				<div className="icon-bar">
					<a
						href="https://www.instagram.com/mikbix/"
						target="_blank"
						rel="noopener noreferrer"
						className="insta"
					>
						<FontAwesomeIcon icon={faCameraRetro} />
					</a>
					<a
						href="https://github.com/mikifriki"
						target="_blank"
						rel="noopener noreferrer"
						className="twitter"
					>
						<FontAwesomeIcon icon={faLaptopCode} />
					</a>
					<a
						href="http://facebook.com/mihkel.liblikman"
						target="_blank"
						rel="noopener noreferrer"
						className="facebook"
					>
						<FontAwesomeIcon icon={faBookOpen} />
					</a>
					<a
						href="https://www.linkedin.com/in/mihkel-liblikman-319347174/"
						target="_blank"
						rel="noopener noreferrer"
						className="linkedin"
					>
						<FontAwesomeIcon icon={faBriefcase} />
					</a>
				</div>
				<div className="bg">
					<div class="container">
						<div class="row">
							<div className="col-md-3">
								<img className="img" src={mina} alt={''} />
							</div>
							<h1 className=" col-md-6 name">
								Mihkel Liblikman
								<div className="post-container">
									{this.renderPost()}
								</div>
							</h1>
							<br />
						</div>
					</div>
				</div>
				<div className="intro">
					<h2 className="abt">
						<FontAwesomeIcon icon={faAddressCard} size={'s'} />{' '}
						About me
					</h2>
					{this.renderIntro()}
				</div>
				<div className="einf">{this.renderExtra()}</div>
				{this.renderFooter()}
			</div>
		);
	}
}

export default Home;
