const METEO_COORD_URL = "https://geocoding-api.open-meteo.com/v1/search?name=_METEO_CITY_&count=10&language=en&format=json";
const METEO_WEATHER_URL = "https://archive-api.open-meteo.com/v1/archive?latitude=_METEO_LAT_&longitude=_METEO_LON_&start_date=2026-08-01&end_date=2026-08-28&hourly=temperature_2m";

// Keep these commented out for now
// const NYT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=_NYT_QUERY_&api-key=${NYT_KEY}`;
// const SI_URL = `https://api.si.edu/openaccess/api/v1.0/search?q=_SI_QUERY_ AND online_media&api_key=${SI_KEY}`;
// const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/interactions";

document.addEventListener("DOMContentLoaded", () => {

  // Add a click listener to the find-coords button element
  document.querySelector("#find-coords").addEventListener("click", async () => {
    // get input value from the text input element
    const cityName = document.querySelector("#city-name").value;

    // replace _METEO_CITY_ with city name in the url
    const urlWithCity = METEO_COORD_URL.replace("_METEO_CITY_", cityName);

    // fetch, json
    const latlonRes = await fetch(urlWithCity);
    const latlonData = await latlonRes.json();

    const firstCityData = latlonData.results[0];

    // populate html elements with lat/lon values
    document.querySelector("#lat-result").innerHTML = firstCityData.latitude;
    document.querySelector("#lon-result").innerHTML = firstCityData.longitude;
  });

  // TODO: NYT
  // TODO: SI
  // TODO: LLM
});
