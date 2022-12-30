import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar} from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import { SinglePeople } from "../component/single_people";
import { SinglePlanet } from "../component/single_planet";
import { SingleStarShip } from "../component/single_starship";
import { SingleVehicle  } from "../component/single_vehicle";


export const ViewPeople = () => {
	const { store, actions } = useContext(Context);
    const [showdetails, SetShowdetails] = useState({});

    const showsinglepeople = store?.singlepeople.map((item, idx) => {
        return (
            <SinglePeople 
            key={idx} 
			id={idx}
			name={item.name}
			height={item.height}
			hair_color={item.hair_color}
			eye_color={item.eye_color}
			url={item.url}
            mass={item.mass}
            birth_year={item.birth_year}
            gender={item.gender}
            homeworld={<><br></br><spam onClick={() => {ShowandfetchSingleplanet(item.homeworld)}}>{item.homeworld}</spam></>}
            vehicles={item.vehicles.map((item) => { return (<><br></br><spam onClick={() => {ShowandfetchSingleVehicle(item)}}>{item}</spam></>)})}
            starships={item.starships.map((item) => { return (<><br></br><spam onClick={() => {ShowandfetchSinglestarship(item)}}>{item}</spam></>)})}
            />
        )
    })

    const ShowandfetchSingleplanet = (urlplanet) => {

        fetch(urlplanet)
				.then((promiseResponse) => promiseResponse.json())
				.then((data) => SetShowdetails(data))
                // SetShowdetails([...showdetails, "planet"])
                console.log("showdetails", showdetails)
    } 

    const ShowandfetchSinglestarship = (urlstarship) => {

        fetch(urlstarship)
				.then((promiseResponse) => promiseResponse.json())
				.then((data) => SetShowdetails(data))
                console.log("showdetails", showdetails)
    } 

    const ShowandfetchSingleVehicle = (urlvehicles) => {

        fetch(urlvehicles)
				.then((promiseResponse) => promiseResponse.json())
				.then((data) => SetShowdetails(data))
                console.log("showdetails", showdetails)
    } 

    

    return (
        <>
        <Navbar />
        <Link style={{textDecoration: "none"}} to="/inside" >
            <div className="container bg-warning text-black d-flex align-items-center rounded" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-square me-2 align-middle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>

                <spam className="" > GO BACK </spam>
            </div>
        </Link>
        
       
        <div className="container mb-4 d-flex justify-content-around">
            {showsinglepeople}       

            {/* <iframe className="ms-4" src="singlepeople" style={{ border: "none" , width: "25rem"}} title="Iframe Example"> 
            <div>
               
                </div></iframe> */}
            <div className="text-white ms-4 justify-content-center" style={{ border: "none" , width: "25rem"}}> 
            
            {showdetails.rotation_period?
            (
                // () => {console.log("showDetails22222", showdetails)
                // showdetails.map((item, idx) => {
                    // return (
                        <SinglePlanet
                        // key={idx} 
                        // id={idx}
                        name={showdetails.name}
                        rotation_period={showdetails.rotation_period}
                        orbital_period={showdetails.orbital_period}
                        climate={showdetails.climate}
                        url={showdetails.url}
                        gravity={showdetails.gravity}
                        terrain={showdetails.terrain}
                        population={showdetails.population}
                        diameter={showdetails.diameter}
                        surface_water={showdetails.surface_water}
                        residents={showdetails.residents?.map((item) => { return (<><br></br><spam>{item}</spam></>)})}
                        />
                    // )
                // })}
            ) 
          : showdetails.starship_class?
          (
            <SingleStarShip
			name={showdetails.name}
			model={showdetails.model}
			max_atmosphering_speed={showdetails.max_atmosphering_speed}
			crew={showdetails.crew}
			passengers={showdetails.passengers}
			cargo_capacity={showdetails.cargo_capacity}
			hyperdrive_rating={showdetails.hyperdrive_rating}
			namefav={showdetails.name}
			urlfav={showdetails.url}
            manufacturer={showdetails.manufacturer}
            length={showdetails.length}
            consumables={showdetails.consumables}
            MGLT={showdetails.MGLT}
            starship_class={showdetails.starship_class}
            pilots={showdetails.pilots?.map((item) => {return (<><br></br><spam>{item}</spam></>)})}
			/>
          )
          : showdetails.vehicle_class?
          (
            <SingleVehicle
			name={showdetails.name}
			model={showdetails.model}
            manufacturer={showdetails.manufacturer}
            cost_in_credits={showdetails.cost_in_credits}
            length={showdetails.length}
            max_atmosphering_speed={showdetails.max_atmosphering_speed}
            crew={showdetails.crew}
            passengers={showdetails.passengers}
            cargo_capacity={showdetails.cargo_capacity}
            consumables={showdetails.consumables}
            vehicle_class={showdetails.vehicle_class}
            pilots={showdetails.pilots?.map((item) => {return (<><br></br><spam>{item}</spam></>)})}
			/>
          )
            
            :
            <div className="mt-5">
                <h4 className="text-center">Click on the URLs in 
                <spam style={{color: "#e0cd15"}}>"Home World"</spam>, 
                <spam style={{color: "#e0cd15"}}>"Vehicle"</spam> or 
                <spam style={{color: "#e0cd15"}}>"Starships"</spam> to see details
                </h4>
            </div>
            
        }
                </div>
        </div>
        <div className="fixed-bottom">
            <Footer />
        </div>
        
        </>
    )

}