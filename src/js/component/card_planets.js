import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import "./Star_Wars_Logo.svg.png"
import "../../styles/styles.css"
import { Context } from "../store/appContext";


export const CardPlanets = (props) => {
    const { store, actions } = useContext(Context);
    const [isfav, SetIsfav] = useState(true);

    const handlefavorites = (name, url) => {
        isfav === true? actions.addFavorites(name, url) : actions.deleteFavorites(name, url)
        }

	return (
		<div className="card border border-warning mb-1" style={{ width: "17rem" , backgroundColor: "#000"}} key={props.key} id={props.id}>
				<img src="./starwarsplanets.jpg" className="card-img-top mt-1" />
				<div className="card-body text-white">
					<h4 className="card-title ">{props.name}</h4>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Rotation Period:</span> {props.rotation_period} Hours</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Orbital Period:</span> {props.orbital_period} Days</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Climate:</span> {props.climate}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Gravity:</span> {props.gravity}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Terrain:</span> {props.terrain}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Population:</span> {props.population}</span><br></br>

					<br></br>
					
				</div>
                <div className="card-footer">
                <Link to="/viewplanet">
                        <button onClick={() => {actions.saveSinglePlanet(props.url)}} className="btn btn-warning ">Details </button>
                    </Link>
                    <button className="btn btn-outline-warning float-end" onClick={() => {SetIsfav(!isfav); handlefavorites(props.namefav, props.urlfav)}}>
                        <span className="" id="heart">
                            &#128155;
                        </span>
                    </button>
                </div>
                
			</div>
	);
};

CardPlanets.propTypes = {
    name: PropTypes.string,
    key: PropTypes.number,
    id: PropTypes.number,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    population: PropTypes.string,
    url: PropTypes.string,
}