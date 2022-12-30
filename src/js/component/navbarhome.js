import React from "react";
import { Link } from "react-router-dom";

export const NavbarHome = () => {
	return (
		<nav className="navbar navbar-dark mb-3 p-2 container justify-content-center">
			<Link to="/">
				<img src="./Star_Wars_Logo.svg.png" className="" style={{ width: "18rem"}}/>
				
			</Link>
			

		</nav>
	);
};