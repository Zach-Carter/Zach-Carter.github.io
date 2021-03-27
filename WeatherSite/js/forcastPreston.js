const apiURL= "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3014d71ceff446035940314c162afafa";


fetch(apiURL)
.then((response) => response.json())
.then((jsonObject) => {
  document.getElementById('cur').innerHTML = Math.round(jsonObject.main.temp);
  document.getElementById('tp').innerHTML = Math.round(jsonObject.main.temp_max);
  document.getElementById('humi').innerHTML = Math.round(jsonObject.main.humidity);
  document.getElementById('winds').innerHTML = Math.round(jsonObject.wind.speed);
  

  var windsp = Math.round(jsonObject.wind.speed);
  var temp =  Math.round(jsonObject.main.temp);
  var windchil = 0;
  if (temp <= 10 && windsp >= 5) {
      windchil = 35.74 + 0.6215 * temp - 35.75 * math.pow(windsp, 0.16) + 0.4275 * temp * (windsp, 0.16);
      document.getElementById('windchil').innerHTML = Math.round(windchil*10)/10;
      document.querySelector('windc').innerHTML = windchil;

  } 
  else {
      windchil = 0;
      document.querySelector('windc').innerHTML = windchil;
  }
  
  
})
