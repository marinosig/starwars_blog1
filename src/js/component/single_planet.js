import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import "./Star_Wars_Logo.svg.png"
import "../../styles/styles.css"
import { Context } from "../store/appContext";


export const SinglePlanet = (props) => {
    const { store, actions } = useContext(Context);
    
	return (
		<div className="card mb-4" style={{ width: "23rem" , backgroundColor: "#000"}} key={props.key} id={props.id}>
				<img src="./Star_Wars_Logo.svg.png" className="card-img-top" />
				<div className="card-body text-white">
                    <h1 className="card-title ">{props.name}</h1>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Rotation Period:</span> {props.rotation_period} Hours</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Orbital Period:</span> {props.orbital_period} Days</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Climate:</span> {props.climate}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Gravity:</span> {props.gravity}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Terrain:</span> {props.terrain}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Population:</span> {props.population}</span><br></br>

                    <span className="card-text "><span style={{color: "#e0cd15"}}>Diameter:</span> {props.diameter}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Surface Water:</span> {props.surface_water}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Residents:</span> {props.residents}</span><br></br>

					<br></br>
				</div>
                <div className="card-footer text-white bg-dark text-center">
                API Website https://swapi.py4e.com/
                </div>
                
			</div>
	);
};

SinglePlanet.propTypes = {
    name: PropTypes.string,
    key: PropTypes.number,
    id: PropTypes.number,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    population: PropTypes.string,
    diameter: PropTypes.number,
    surface_water: PropTypes.number,
    residents: PropTypes.array,
    url: PropTypes.string,

}