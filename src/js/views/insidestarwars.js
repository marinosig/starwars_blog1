import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/card_people.js";
import { CardPlanets } from "../component/card_planets.js";
import { CardStarships } from "../component/card_starships.js";
import { Navbar} from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import "./Star_Wars_Logo.svg.png"
import { CardVehicles } from "../component/card_vehicles.js";
import "./../../styles/styles.css"



export const InsideStarWars = () => {
	const { store, actions } = useContext(Context);

	const showPeople = store?.people[0]?.results.map((item, index) => {
		return (
			<CardPeople
			key={index} 
			id={index}
			name={item.name}
			height={item.height}
			hair_color={item.hair_color}
			eye_color={item.eye_color}
			url={item.url}
			namefav={item.name}
			urlfav={item.url}
			/>
			)
	})

	const showPlanets = store?.planets[0]?.results.map((item, index2) => {
		return (
			<CardPlanets
			key={index2} 
			id={index2}
			name={item.name}
			rotation_period={item.rotation_period}
			orbital_period={item.orbital_period}
			climate={item.climate}
			gravity={item.gravity}
			terrain={item.terrain}
			population={item.population}
			namefav={item.name}
			urlfav={item.url}
			url={item.url}
			/>
			)
	})

	const showStarships = store?.starships[0]?.results.map((item, index3) => {
		return (
			<CardStarships
			key={index3} 
			id={index3}
			name={item.name}
			model={item.model}
			max_atmosphering_speed={item.max_atmosphering_speed}
			crew={item.crew}
			passengers={item.passengers}
			cargo_capacity={item.cargo_capacity}
			hyperdrive_rating={item.hyperdrive_rating}
			namefav={item.name}
			urlfav={item.url}
			url={item.url}
			/>
			)
	})

	const showVehicles = store?.vehicles[0]?.results.map((item, index4) => {
		return (
			<CardVehicles
			key={index4} 
			id={index4}
			name={item.name}
			model={item.model}
			max_atmosphering_speed={item.max_atmosphering_speed}
			crew={item.crew}
			passengers={item.passengers}
			cargo_capacity={item.cargo_capacity}
			namefav={item.name}
			urlfav={item.url}
			url={item.url}
			/>
			)
	})

	return (
		<>
		<Navbar />
		<div className="container ">
			<ul className="nav nav-pills mb-3 justify-content-evenly" id="pills-tab" role="tablist">
				<li className="nav-item" role="presentation">
					<button className="nav-link active btn btn-warning" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Star Wars Characteres</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link btn btn-warning" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Star Wars Planets</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link btn btn-warning" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Star Wars Starships</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link btn btn-warning" id="pills-outro-tab" data-bs-toggle="pill" data-bs-target="#pills-outro" type="button" role="tab" aria-controls="pills-outro" aria-selected="false">Star Wars Vehicles</button>
				</li>
			</ul>
			<div className="tab-content" id="pills-tabContent">
				<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
					<div className="rounded border border-light" style={{ backgroundColor: "#000" }}>
					<div className="d-flex">
						<h3 className="p-2 text-white flex-grow-1"> Star Wars Characters </h3>
						<button onClick={() => {actions.loadNewData(store?.people[0]?.previous, "people"); }}type="button" className="btn btn-dark m-2">Previous</button>
						<button onClick={() => {actions.loadNewData(store?.people[0]?.next, "people"); }} type="button" className="btn btn-dark m-2">Next</button>
						
					</div>
					
					<div className="row justify-content-center mt-4 pb-4 pt-2 rounded" > {/*scrowling-wrapper removed*/}
						{showPeople}
					</div>
					
					</div>
					
				<br></br>
			
				</div>
				<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
						<div className="rounded border border-light" style={{ backgroundColor: "#000" }}>
						<div className="d-flex">
						
						<h3 className="p-2 text-white flex-grow-1"> Star Wars Planets </h3>
						<button onClick={() => {actions.loadNewData(store?.planets[0]?.previous, "planets"); }}type="button" className="btn btn-dark m-2">Previous</button>
						<button onClick={() => {actions.loadNewData(store?.planets[0]?.next, "planets"); }} type="button" className="btn btn-dark float-end m-2">Next</button>
							
						</div>
						
						<div className="row justify-content-center mt-4 pb-4 pt-2 rounded">
							{showPlanets}
						</div>
			

				</div>
				<br></br>
				</div>
				<div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
					<div className="rounded border border-light" style={{ backgroundColor: "#000" }}>
						<div className="d-flex">
							<h3 className="p-2 text-white flex-grow-1"> Star Wars Starships </h3>
							<button onClick={() => {actions.loadNewData(store?.starships[0]?.previous, "starships"); }}type="button" className="btn btn-dark m-2">Previous</button>
							<button onClick={() => {actions.loadNewData(store?.starships[0]?.next, "starships"); }} type="button" className="btn btn-dark float-end m-2">Next</button>
						</div>
						
						<div className="row justify-content-center mt-4 pb-4 pt-2 rounded">
							{showStarships}
						</div>
					</div>
					<br></br>
					</div>
				<div className="tab-pane fade" id="pills-outro" role="tabpanel" aria-labelledby="pills-outro-tab">
					<div className="rounded border border-light mb-4" style={{ backgroundColor: "#000" }}>
					<div className="d-flex">
						<h3 className="p-2 text-white flex-grow-1"> Star Wars Vehicles </h3>
						<button onClick={() => {actions.loadNewData(store?.vehicles[0]?.previous, "vehicles"); }}type="button" className="btn btn-dark m-2">Previous</button>
						<button onClick={() => {actions.loadNewData(store?.vehicles[0]?.next, "vehicles"); }} type="button" className="btn btn-dark m-2">Next</button>
						
					</div>
					
					<div className="row justify-content-center mt-4 pb-4 pt-2 rounded" > {/*scrowling-wrapper removed*/}
						{showVehicles}
					</div>
								
					</div>
				<br />
					</div>
			</div>
		</div>
		<div className="container">
			
			
			
		</div>
		<div className="">
			<Footer />
		</div>
		
		</>
		

	);
};