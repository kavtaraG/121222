const axios = require('axios');

const meteoFunction = async function obj(){
    try{
        const url = await axios.get('http://api.weatherstack.com/current?access_key=c91ec3eb66588dae3271b83b67cf1f86&query=41.7151,44.8271&units=m');
        const meteo = (type, {country, name})=>{
            console.log(type, country, name);
        }
        const celsius = (type, {temperature, weather_descriptions})=>{
            console.log(type, temperature, weather_descriptions[0]);
        }

        meteo('Location: ', url.data.location);
        celsius('Current Temperature: ', url.data.current);
        
    }catch(error){
        if(error !== 404){
            console.log('URL is not responsible');
        }else{
            console.log('Error 404');
        }
        
    }
    
}

module.exports=meteoFunction;
