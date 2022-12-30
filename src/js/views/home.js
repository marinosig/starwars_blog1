import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavbarHome } from "../component/navbarhome.js";
import { Footer } from "../component/footer.js";
// import { Intro } from "../component/intro.js";

import "./Star_Wars_Logo.svg.png"



export const Home = () => {
	const { store, actions } = useContext(Context);

	

	return (
		<>
		<NavbarHome />
			<div className="container">
			<div className="" style={{ backgroundColor: "#000" }}>
				<div className="">
					<h3 className="p-2 text-white text-center" style={{height: "100px"}}> Welcome to Star Wars Data Website - May the force be with you </h3>
					<p className="text-white text-center" style={{height: "100px"}}>
						This is a website formulated to demonstrate the use of API and Data Structures separeted. You can click in one of the two button bellow to see a Star Wars content with the API XXXXXXXXXX or the information stored in a SQL DataBase, written in Python using Flask.  
					</p>
					
				</div>
				
				<div className="">
					<Link to="/inside">
						<button className="btn btn-warning"> Get Inside Star Wars with API swapi.py4e.com</button>
					</Link>
					
					<Link to="/inside">
						<button className="btn btn-warning float-end"> Get Inside Star Wars with DataBase Content</button>
					</Link>
					
				</div>
				
							
				</div>
			
		</div>
		<div className="fixed-bottom">
			<Footer />
		</div>

		{/* <Intro /> */}

		</>
		

	);
};