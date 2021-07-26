import React from "react";

import logo from "../../src/logo.svg";

export default function Navbar() {
	return (
		<>
			<div className="navbar">
				<img alt="profilepic" src={logo} className="App-logo"></img>
				<div className="title-links">
					<div className="title">
						<h1>Portfolio de Joris Maupied</h1>
					</div>
					<div className="links">
						<a href="/home">Projects</a>
						<a href="/Contact">Contact</a>
						<button className="mr-0" type="button">Toggle</button>
					</div>
				</div>
			</div>
		</>
	);
}
