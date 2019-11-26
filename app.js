window.addEventListener ("load", () => {
  let lon;
  let lat;

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(lon, lat);

      const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=`
      const keyApi = "uk&APPID=cc1d03a663cfe3d92bbeeb2a170c4eed"
      let city = document.getElementById("cidade").innerText;

      console.log(city);

      const createAPI = (city) => {
        return `${urlApi}${city}${keyApi}`
      }

      fetch(createAPI(city))
        .then(response => response.json())
        .then(data => console.log(data));  
    });
  }
});