import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import "./Star_Wars_Logo.svg.png"
import "../../styles/styles.css"
import { Context } from "../store/appContext";


export const CardPeople = (props) => {
    const { store, actions } = useContext(Context);
    const [isfav, SetIsfav] = useState(true);

    const handlefavorites = (name, url) => {
        isfav === true? actions.addFavorites(name, url) : actions.deleteFavorites(name, url)
        }

	return (
		<div className="card border border-warning mb-1" style={{ width: "17rem" , backgroundColor: "#000"}} key={props.key} id={props.id}>
				<img src="./starwarscharacteres.jpg" className="card-img-top mt-1" />
				<div className="card-body text-white">
					<h4 className="card-title ">{props.name}</h4>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Height:</span> {props.height}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Hair Color:</span> {props.hair_color}</span><br></br>
                    <span className="card-text "><span style={{color: "#e0cd15"}}>Eye Color:</span> {props.eye_color}</span><br></br>

					<br></br>
				</div>
                <div className="card-footer">
                    <Link to="/viewpeople">
                        <button onClick={() => {actions.saveSinglePeople(props.url)}} className="btn btn-warning ">Details </button>
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

CardPeople.propTypes = {
    name: PropTypes.string,
    key: PropTypes.number,
    id: PropTypes.number,
    height: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    url: PropTypes.string,
    namefav: PropTypes.string,
    urlfav: PropTypes.string,
}

