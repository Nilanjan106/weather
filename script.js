const cityname  = document.querySelector(".cityname");
const cityname1  = document.querySelector(".cityname1");
const temp  = document.querySelector(".temp");
const sky  = document.querySelector(".sky");
const faren  = document.querySelector(".faren");
const celci  = document.querySelector(".celci");
const feel  = document.querySelector(".feel");
const hum  = document.querySelector(".hum");
const wind  = document.querySelector(".wind");
const last  = document.querySelector(".last");
const city1  = document.querySelector(".city1");
async function weatherApi() {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityname1.value}`;
    const result = await fetch(url,options)
    let data = await result.json();
    console.log(cityname1.value)
    temp.innerHTML = data.current.temp_c
    feel.innerHTML = data.current.feelslike_c
    sky.innerHTML = data.current.condition.text
    city1.innerHTML = data.location.name + " " + data.location.country
    last.innerHTML = data.current.last_updated
    wind.innerHTML = data.current.wind_kph
    hum.innerHTML = data.current.humidity
    console.log(data)
    console.log("hello")
}
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a77e2e824bmsh222002215dfb9c8p1c368ejsne64a78a1bdc7',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};
cityname.addEventListener("click",weatherApi);






