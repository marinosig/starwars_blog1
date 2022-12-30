import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import "./Star_Wars_Logo.svg.png"
import "../../styles/styles.css"
import { Context } from "../store/appContext";


export const CardStarships = (props) => {
    const { store, actions } = useContext(Context);
    const [isfav, SetIsfav] = useState(true);

    const handlefavorites = (name, url) => {
        isfav === true? actions.addFavorites(name, url) : actions.deleteFavorites(name, url)
        }
	return (
		<div className="card border border-warning mb-1" style={{ width: "17rem" , backgroundColor: "#000"}} key={props.key} id={props.id}>
				<img src="./starwarsstarships.jpg" className="card-img-top mt-1" />
				<div className="card-body text-white">
					<h4 className="card-title ">{props.name}</h4>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Model</span> {props.model}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Max Speed:</span> {props.max_atmosphering_speed}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Crew:</span> {props.crew}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Passengers:</span> {props.passengers}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Cargo Capacity:</span> {props.cargo_capacity}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Hyperdrive Rating:</span> {props.hyperdrive_rating}</span><br></br>

					<br></br>
                    				
				</div>
                <div className="card-footer">
                <Link to="/viewstarship">
                        <button onClick={() => {actions.saveSingleStarship(props.url)}} className="btn btn-warning ">Details </button>
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

CardStarships.propTypes = {
    name: PropTypes.string,
    key: PropTypes.number,
    id: PropTypes.number,
    model: PropTypes.string,
    max_atmosphering_speed: PropTypes.string,
    crew: PropTypes.string,
    passengers: PropTypes.string,
    cargo_capacity: PropTypes.string,
    hyperdrive_rating: PropTypes.string,
    url: PropTypes.string,
}