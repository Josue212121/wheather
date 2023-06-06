const keywheather = "40e33da9d33ebfa4a51b9a997831ce70";

/*const latitud = 44.34;

const longitud = 10.59;



const currentWheather = async (wheather) => {

const url = `https://api.openwheathermap.org/data/2.5/wheather?lat=${lat}&lon=${lon}&appid=${APIkey}` ;

const response = await fetch(url) ;
const data = await response.json();
console.log(data);
return data ;
}

currentWheather()
.then(response => {
    nameCity.innerText = response.name;
    coord.innerText = response.coord.lat;
    description.innerText = response.wheather[0].description;
})
.catch(error => console.log (error));*/

const city = document.getElementById('city');
const state = document.getElementById('state');
const lat = document.getElementById('lat');
const long = document.getElementById('long');

const caracas = "Caracas";

const  currentWheather = async (wheather) => {

 const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${keywheather}`;

 const response = await fetch(url);
 const data = await response.json();
 console.log(data);
 return data ;
}

currentWheather()
.then(response => {
    city.innerText = response[0].name;
    lat.innerText = response[0].lat;
    state.innerText = response[0].country;
}).catch(error => console.log (error));