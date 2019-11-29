window.addEventListener ("load", () => {
  let lon;
  let lat;

  let x = document.querySelector('.textLeft').length;

      console.log(x);
/*
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=`
      const keyApi = "uk&APPID=cc1d03a663cfe3d92bbeeb2a170c4eed"

      var city = document.getElementById("yourCity").value;

      

      const createAPI = (city) => {
        return `${urlApi}${city}${keyApi}`
      }

      fetch(createAPI(city))
        .then(response => response.json())
        .then(data => console.log(data));
        
      
      
    });
  }/*/
});