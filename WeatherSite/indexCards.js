const requestURL = 'index.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        
        let found = document.createElement('div');
        let pop = document.createElement('div');
        let rain = document.createElement('div');
        let h3= document.createElement('h3');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        
        let textb = document.createElement('div');
        let imgb = document.createElement('div');
        textb.classList.add('card'); 
        imgb.classList.add('card2');
        card.classList.add('Incards');
         //this is for the css

        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        found.textContent='Year Founded: ' + towns[i].yearFounded;
        pop.textContent='Population: ' + towns[i].curentPopulation;
        rain.textContent='Annual Rain Fall: ' + towns[i].averageRainfall;
        image.setAttribute('src', towns[i].photo);

        textb.appendChild(h2);
        textb.appendChild(h3);
        textb.appendChild(found);
        textb.appendChild(pop);
        textb.appendChild(rain);
        imgb.appendChild(image);
        card.appendChild(textb);
        card.appendChild(imgb);
        
        document.querySelector('.card').appendChild(card);

    }

  });

 