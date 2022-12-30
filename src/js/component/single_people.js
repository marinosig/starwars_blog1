import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import "./Star_Wars_Logo.svg.png"
import "../../styles/styles.css"
import { Context } from "../store/appContext";


export const SinglePeople = (props) => {
    const { store, actions } = useContext(Context);
    
	return (
		<div className="card mb-4" style={{ width: "23rem" , backgroundColor: "#000"}} key={props.key} id={props.id}>
				<img src="./Star_Wars_Logo.svg.png" className="card-img-top" />
				<div className="card-body text-white">
                    <h1 className="card-title ">{props.name}</h1>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Height:</span> {props.height}</span><br></br>                    
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Hair Color:</span> {props.hair_color}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Eye Color:</span> {props.eye_color}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Mass:</span> {props.mass}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Birth Year:</span> {props.birth_year}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Gender:</span> {props.gender}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Home World:</span> {props.homeworld}</span><br></br>

                    <span className="card-text "><span style={{color: "#e0cd15"}}>Vehicles:</span> {props.vehicles}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Starships:</span> {props.starships}</span><br></br>

					<br></br>
				</div>
                <div className="card-footer text-white bg-dark text-center">
                API Website https://swapi.py4e.com/
                </div>
                
			</div>
	);
};

SinglePeople.propTypes = {
    name: PropTypes.string,
    key: PropTypes.number,
    id: PropTypes.number,
    height: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    mass: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    homeworld: PropTypes.array,
    url: PropTypes.string,
    vehicles: PropTypes.array,
    starships: PropTypes.array,
    

}