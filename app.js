
const app = document.querySelector ('.weather-app');
const temperature = document.querySelector ('.temp');
const dateOutput = document.querySelector ('.date');
const timeOutput = document.querySelector ('.time');
const conditionOutput = document.querySelector ('.condition');
const nameOutput= document.querySelector ('.name');
const icon = document.querySelector ('.icon');
const temp1  = document.querySelector ('.temp max1');
const temp2 = document.querySelector ('.temp min2');
const humadityOutput = document.querySelector ('.humadity');
const cloudOutput = document.querySelector ('.cloud');
const windoutput = document.querySelector ('.wind');
const form = document.querySelector ('.locationInput');
const search = document.querySelector ('.search');
const btn = document.querySelector ('.submit');
const cities = document.querySelector ('.city');


let cityInput = "London";


cities.forEach ((city) => {
    city.addEventListener('click', (e) => {
        
        cityInput = e.target.innerHTML;

        fetchWeatherData

        app.style.opacity = "0";
    })
})


form.addEventListener('submit', (e) => {

    if(search.ariaValueMax.length == 0) {
        alert('Пожалуйста, введите название города');
    }else {
        
        cityInput = search.value;

        fetchWeatherData();

        search.value = "";

        app.style.opacity = "0";
    }

    e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    return weekday[new Date (`${day}/${month}/${year}`).getDay()];

    function fetchWeatherData() {

    fetch(``)
    }
}