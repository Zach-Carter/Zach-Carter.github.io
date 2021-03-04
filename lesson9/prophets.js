const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';



fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let bday= document.createElement('div');
        let bday_pl= document.createElement('div');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        card.classList.add('cards'); //this is for the css


        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        bday.textContent='Date of Birth: ' + prophets[i].birthdate;
        bday_pl.textContent='Place of Birth: ' + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);


        card.appendChild(h2);
        card.appendChild(bday);
        card.appendChild(bday_pl);
        card.appendChild(image);
        

        document.querySelector('.cards').appendChild(card);
    }

  });

 