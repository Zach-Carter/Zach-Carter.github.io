const apiURL= "http://api.openweathermap.org/data/2.5/forecast?q=preston&appid=0f51ee23d8c7dfd99e2908b9a2ffe942&units=imperial";

fetch(apiURL)
.then((response) => response.json())
.then((jsonObject) => {


console.table(jsonObject.list);

const days = jsonObject.list.filter(i => i.dt_txt.includes("18:00:00"));

let dayoweek = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];


for (let i = 0; i < days.length; i++ ) {
    let card = document.createElement('section');

    let day = document.createElement('div');
    let icon = document.createElement('img');
    let temp = document.createElement('div');

    day.classList.add('forc1');
    icon.classList.add('forc2');
    temp.classList.add('forc3');
    //card.classList.add('Incard2');

    console.log(dayoweek[new Date(days[i].dt * 1000).getDay()]);
    day.textContent = dayoweek[new Date(days[i].dt * 1000).getDay()];
    const imgsrc = 'https://openweathermap.org/img/w/' + days[i].weather[0].icon + '.png';
    icon.setAttribute('src', imgsrc);
    temp.textContent = days[i].main.temp_max +'*F';

    card.appendChild(day);
    card.appendChild(icon);
    card.appendChild(temp);

    document.querySelector('.card').appendChild(card);
}
})