

const fetch = require('node-fetch');
//const fs = require('fs');

const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${process.env.APPID}`;


const getWeather = async () => {
    let data = await fetch(url); //.catch((err) => {
        //console.log(err);
    
    let jsonData = await data.json();
    //fs.writeFileSync('./data.json', JSON.stringify(jsonData));
    return jsonData; //Need to return the data to have it appear on the screen!!!

    //console.log(await data.json())
}

getWeather()
module.exports = getWeather;