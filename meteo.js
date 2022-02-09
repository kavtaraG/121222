const axios = require('axios');

const meteoFunction = async function obj(){
    try{
        const url = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2F2dGFyYWciLCJhIjoiY2t5eWQxMG9yMHI1ZDJ4czM1ZG13MHA2ZyJ9.9__DCmzZQRsb2zxnJpek3g&limit=1');
        const meteo = (type, {place_name})=>{
            console.log(type, place_name);
        }
        meteo('Location: ', url.body.data[0].features[0].place_name);
    }catch(error){
        if(error !== 404){
            console.log('URL is not responsible');
        }else{
            console.log('Error 404');
        }
        
    }
    
}

module.exports=meteoFunction;
