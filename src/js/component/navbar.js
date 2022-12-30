import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const showFavorites = store?.favorites?.map((item, index) => {
			return (
				<li className="text-white d-flex align-items-center me-2"key={index}
				>
					<a className="dropdown-item bg-dark text-white" href="#" 
					// onClick={}
					>
						{item.Name}
					</a>
					<svg onClick={() => {actions.deleteFavorites(item.Name, item.Url)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
						<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
						<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
					</svg>
				</li>
			)
		})


	

	return (
		<nav className="navbar navbar-dark bg-black mb-3 p-2 container sticky-top ">
			<Link to="/">
				<img src="./Star_Wars_Logo.svg.png" className="" style={{ width: "8rem"}}/>
				
			</Link>
			<div className="dropdown">
				<button className="btn btn-warning dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-expanded="false">
					Favourites
				</button>
				<ul className="dropdown-menu dropdown-menu-end bg-dark">
					{showFavorites}

				</ul>
			</div>

		</nav>
	);
};