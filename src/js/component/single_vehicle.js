import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import "./Star_Wars_Logo.svg.png"
import "../../styles/styles.css"
import { Context } from "../store/appContext";


export const SingleVehicle = (props) => {
    const { store, actions } = useContext(Context);
    
	return (
		<div className="card mb-4" style={{ width: "23rem" , backgroundColor: "#000"}} key={props.key} id={props.id}>
				<img src="./Star_Wars_Logo.svg.png" className="card-img-top" />
				<div className="card-body text-white">
                    <h1 className="card-title ">{props.name}</h1>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Model</span> {props.model}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Manufacturer:</span> {props.manufacturer}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Cost in Credits:</span> {props.cost_in_credits}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Length:</span> {props.length}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Max Atmosphering Speed:</span> {props.max_atmosphering_speed}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Crew:</span> {props.crew}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Passengers:</span> {props.passengers}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Cargo Capacity:</span> {props.cargo_capacity}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Consumables:</span> {props.consumables}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Vehicle Class:</span> {props.vehicle_class}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Pilots:</span> {props.pilots}</span><br></br>
                    
					<br></br>
				</div>
                <div className="card-footer text-white bg-dark text-center">
                API Website https://swapi.py4e.com/
                </div>
                
			</div>
	);
};

SingleVehicle.propTypes = {
    name: PropTypes.string,
    key: PropTypes.number,
    id: PropTypes.number,
    model: PropTypes.string,
    manufacturer: PropTypes.string,
    cost_in_credits: PropTypes.string,
    length: PropTypes.string,
    max_atmosphering_speed: PropTypes.string,
    crew: PropTypes.string,
    passengers: PropTypes.string,
    cargo_capacity: PropTypes.string,
    consumables: PropTypes.string,
    vehicle_class: PropTypes.string,
    pilots: PropTypes.string,
    url: PropTypes.string,

}