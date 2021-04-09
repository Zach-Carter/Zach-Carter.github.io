   const requestURL = 'templeClosures.json';

   fetch(requestURL)
   .then((response) => response.json())
   .then((jsonObject) => {
         // temporary checking for valid response and data parsing
        document.getElementById('calgary').innerHTML = jsonObject.temples[1].templeClosures;
        document.getElementById('seoul').innerHTML = jsonObject.temples[0].templeClosures;
        document.getElementById('salt').innerHTML = jsonObject.temples[2].templeClosures;
        document.getElementById('nauvoo').innerHTML = jsonObject.temples[3].templeClosures;
   
     });