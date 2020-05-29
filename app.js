
const express = require('express');
const hbs = require('express-handlebars'); //npm i express-handlebars
const path = require('path');
const app = express();
require('dotenv').config(); // hide the data that is not essential for others to see. need to know basis!

const getWeather = require('./lib/index.js');
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
  defaultLayout: 'layout',
  extname: 'hbs'
}));

app.set('view engine', '.hbs');


app.get('/', async (req, res) => {
    let data = await getWeather();
    //console.log(data);
    
    let name = data.name
    let temp = data.main.temp
    let timezone = data.timezone
    let humidity = data.main.humidity
    let clouds = data.clouds.all


    res.render('index', {name, temp, timezone, humidity, clouds}) //This renders the HB index. res.send is for when not using handle bars.

});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});


//app.get('./page2', (req, res) => {
  //  res.send('hello, welcome to page 2!');

//})