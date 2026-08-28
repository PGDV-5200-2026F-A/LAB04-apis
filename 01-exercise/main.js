const METEO_COORD_URL = "https://geocoding-api.open-meteo.com/v1/search?name=_METEO_CITY_&count=10&language=en&format=json";
const METEO_WEATHER_URL = "https://archive-api.open-meteo.com/v1/archive?latitude=_METEO_LAT_&longitude=_METEO_LON_&start_date=2026-08-01&end_date=2026-08-28&hourly=temperature_2m";

const NYT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=_NYT_QUERY_&api-key=${NYT_KEY}`;
const SI_URL = `https://api.si.edu/openaccess/api/v1.0/search?q=_SI_QUERY_ AND online_media&api_key=${SI_KEY}`;
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/interactions";

document.addEventListener("DOMContentLoaded", () => {
  // TODO: Combine 2 APIs
  //       Get result from one API and use it as input to another
  //       For example, get coordinates from METEO and use it to get monthly temperatures
  //       Or, get keywords from NYT stories and find images in SI collection

  // Listen for button clicks to start process
  document.querySelector("#run-api").addEventListener("click", async () => {
    const input = document.querySelector("#api-input").value;
    // TODO: fetch from first API
    // TODO: get result
    // TODO: fetch from second API
    // TODO: update output element
    document.querySelector("#api-result").innerHTML = "SOMETHING";
  });
});
