const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			vehicles: [],
			favorites: [],
			singlepeople: [],
			singleplanets: [],
			singlestarships: [],
			singlevehicles: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://swapi.py4e.com/api/people")
				.then((promiseResponse) => promiseResponse.json())
				.then(data => setStore( {
					people: [data]
				}))
				fetch("https://swapi.py4e.com/api/planets")
				.then((promiseResponse) => promiseResponse.json())
				.then(dataPlanets => setStore( {
					planets: [dataPlanets]
				}))
				fetch("https://swapi.py4e.com/api/starships")
				.then((promiseResponse) => promiseResponse.json())
				.then(dataStarships => setStore( {
					starships: [dataStarships]
				}))
				fetch("https://swapi.py4e.com/api/vehicles")
				.then((promiseResponse) => promiseResponse.json())
				.then(dataVehicles => setStore( {
					vehicles: [dataVehicles]
				}))
			},
				// HABILITAR PARA FUNCIONAR NEXT E PREVIOUS 
			loadNewData: (url, storetype) => {

			// 	fetch(url).then((promise) => promise.json()).then((data) => data);
			// 	setStore({storetype: [data]});
			// },
				
				if (storetype === "people") {
					fetch(url)
					.then ((promiseResponse) => promiseResponse.json())
					.then((data) => setStore( {
						people: [data], // um problema pois não está pegando o parametro "type", trocar people pelo parametro
					}))
				// ;console.log("text", url)
				};
				if 	(storetype === "planets") {
					fetch(url)
					.then ((promiseResponse) => promiseResponse.json())
					.then((data) => setStore( {
						planets: [data], // um problema pois não está pegando o parametro "type", trocar people pelo parametro
					}))
				// ;console.log("text", url)
				}
				if 	(storetype === "starships") {
					fetch(url)
					.then ((promiseResponse) => promiseResponse.json())
					.then((data) => setStore( {
						starships: [data], // um problema pois não está pegando o parametro "type", trocar people pelo parametro
					}))
				// ;console.log("text", url)
				}
				if 	(storetype === "vehicles") {
					fetch(url)
					.then ((promiseResponse) => promiseResponse.json())
					.then((data) => setStore( {
						vehicles: [data], // um problema pois não está pegando o parametro "type", trocar people pelo parametro
					}))
				// ;console.log("text", url)
				}
			
			},

			saveSinglePeople: (url) => {
				fetch(url)
				.then((promiseResponse) => promiseResponse.json())
				.then((dataSinglePeople) => setStore({singlepeople: [dataSinglePeople],}))
				console.log("savedSinglePeople", getStore().singlepeople);
			},

			saveSinglePlanet: (url) => {
				fetch(url)
				.then((promiseResponse) => promiseResponse.json())
				.then((dataSinglePlanet) => setStore({singleplanets: [dataSinglePlanet],}))
				console.log("savedSinglePlanet", getStore().singleplanets);
			},

			saveSingleStarship: (url) => {
				fetch(url)
				.then((promiseResponse) => promiseResponse.json())
				.then((dataSingleStarship) => setStore({singlestarships: [dataSingleStarship],}))
				console.log("savedSingleStarship", getStore().singlestarships);
			},

			saveSingleVehicle: (url) => {
				fetch(url)
				.then((promiseResponse) => promiseResponse.json())
				.then((dataSingleVehicle) => setStore({singlevehicles: [dataSingleVehicle],}))
				console.log("savedSingleVehicles", getStore().singlevehicles);
			},

			addFavorites: (name, url) => {
				if (name !== undefined) {
				let newFavoriteItem = {"Name": name, "Url": url};
				setStore({favorites: [...getStore().favorites, newFavoriteItem]})
				console.log(getStore().favorites);
			}},

			deleteFavorites: (name) => {
				let newFavorites =  getStore().favorites.filter((element) => element.Name !== name);
				setStore({
					favorites: newFavorites
				});
				console.log(getStore().favorites)
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}


		}
	};
};

export default getState;