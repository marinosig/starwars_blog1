import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar} from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import { SinglePeople } from "../component/single_people.js";
import { SingleStarShip } from "../component/single_starship";



export const ViewStarship = () => {
	const { store, actions } = useContext(Context);
    const [showdetails, SetShowdetails] = useState({});

    const showsingleStarShip = store?.singlestarships.map((item, idx) => {
        return (
            <SingleStarShip
            key={idx} 
			id={idx}
			name={item.name}
            model={item.model}
			max_atmosphering_speed={item.max_atmosphering_speed}
			crew={item.crew}
			passengers={item.passengers}
			cargo_capacity={item.cargo_capacity}
			hyperdrive_rating={item.hyperdrive_rating}
			namefav={item.name}
			urlfav={item.url}
            manufacturer={item.manufacturer}
            length={item.length}
            consumables={item.consumables}
            MGLT={item.MGLT}
            starship_class={item.starship_class}
            url={item.url}
            
            pilots={item.pilots.map((item) => { return (<><br></br><spam onClick={() => {ShowandfetchSinglePeople(item)}}>{item}</spam></>)})}
            />
        )
    })

    const ShowandfetchSinglePeople = (urlpleople) => {

        fetch(urlpleople)
				.then((promiseResponse) => promiseResponse.json())
				.then((data) => SetShowdetails(data))
                // SetShowdetails([...showdetails, "planet"])
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
            {showsingleStarShip}       

            {/* <iframe className="ms-4" src="singlepeople" style={{ border: "none" , width: "25rem"}} title="Iframe Example"> 
            <div>
               
                </div></iframe> */}
            <div className="text-white ms-4 justify-content-center" style={{ border: "none" , width: "25rem"}}> 
            
            {showdetails.gender?
            (
                // () => {console.log("showDetails22222", showdetails)
                // showdetails.map((item, idx) => {
                    // return (
                        <SinglePeople
                        // key={idx} 
                        // id={idx}
                        name={showdetails.name}
                        height={showdetails.height}
                        hair_color={showdetails.hair_color}
                        eye_color={showdetails.eye_color}
                        url={showdetails.url}
                        mass={showdetails.mass}
                        birth_year={showdetails.birth_year}
                        gender={showdetails.gender}
                        vehicles={showdetails.vehicles.map((item) => { return (<><br></br><spam >{item}</spam></>)})}
                        starships={showdetails.starships.map((item) => { return (<><br></br><spam >{item}</spam></>)})}
                        homeworld={<><br></br><spam >{showdetails.homeworld}</spam></>}
                        />
                    // )
                // })}
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