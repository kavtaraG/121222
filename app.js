const axios = require('axios');

const asyncFunction = async function obj(){
    try{
        const url = await axios.get('https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json');
        const exchangeRate = (type, {name})=>{
            console.log(type, name);
           
        }
        const exchangeName = (typeRate, {rate})=>{
            console.log(typeRate, rate);
        }
        exchangeRate('სახელი: ', url.data[0].currencies[0]);
        exchangeName('კურსი', url.data[0].currencies[0]);
    }catch(error){
        if(error === 404){
            console.log('error 404');
        }else{
            console.log('URL is not responsible');
        }
       
    }
}

module.exports=asyncFunction;