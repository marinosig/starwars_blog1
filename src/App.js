import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../src/js/component/scrollToTop.js"

import { Home } from "../src/js/views/home"
import { InsideStarWars } from "./js/views/insidestarwars.js";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "../src/js/store/appContext.js"
import { ViewPeople } from "./js/views/view_people.js"
import { ViewPlanet } from "./js/views/view_planet.js"
import { ViewStarship } from "./js/views/view_starship.js"
import { ViewVehicle } from "./js/views/view_vehicle.js"
import { SinglePeople } from "./js/component/single_people.js";

// import { Navbar } from "./../src/js/component/navbar.js"
// import { Footer } from "./component/footer";
// import { Card }  from "./component/card.js"

//create your first component
const App = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					<Routes>
						<Route exact path="/" 
            element={<Home />} 
            />
						<Route exact path="/inside" 
            element={<InsideStarWars />} 
            />
			<Route exact path="/viewpeople" 
            element={<ViewPeople />} 
            />
			<Route exact path="/viewplanet" 
            element={<ViewPlanet />} 
            />
						<Route exact path="/viewstarship" 
            element={<ViewStarship />} 
            />
						<Route exact path="/viewvehicle" 
            element={<ViewVehicle />} 
            />
						<Route exact path="/singlepeople" 
            element={<SinglePeople />} 
            />
						<Route exact path="/single/:theid" 
            // element={<Single />} 
            />
						{/* <Route >
							<h1>Not found!</h1>
						</Route> */}
            {/* <Route element={<h1>Not Found</h1>}  */}
            {/* /> */}
					</Routes>
				
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
