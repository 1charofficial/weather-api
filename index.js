const fetch = require('node-fetch');
const fs = require('fs');

const APPID = '609dea80b605d4b0bf30cfe309458b1f';

const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${APPID}`;


const getWeather = async () => {
    let data = await fetch(url)
    //let jsonData = await data.json()
    //fs.writeFileSync('data.json', jsonData)

    console.log(await data.json())
}

getWeather()