import { API_KEY } from "./API_KEY.js";
import { countryCodes } from "./countryCode.js";

async function getCurrency(){
    const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

    const response = await fetch(URL);

    if (!response.ok){
        throw new Error('Could not fetch data');
    }

    return await response.json();
};

async function displayRates(){
    try{
        const currencyData = await getCurrency();

        console.log(`Base Currency (USD): ${currencyData.conversion_rates.USD}`);
        console.log(`EUR: ${currencyData.conversion_rates.EUR}`);
        console.log(`GBP: ${currencyData.conversion_rates.GBP}`);
        console.log(`JPY: ${currencyData.conversion_rates.JPY}`);
        console.log(`DZD: ${currencyData.conversion_rates.DZD}`);
    }
    catch (error){
        console.error(error);
    }
};

displayRates();


const selectBox1 = document.querySelector('.selectBox1-js');
const selectBox2 = document.querySelector('.selectBox2-js');

//Add currency symbols to first select box
countryCodes.forEach(item=>{
    const option = document.createElement('option');
    option.textContent = item;
    selectBox1.appendChild(option);
});

//Add currency symbols to second select box
countryCodes.forEach(item=>{
    const option = document.createElement('option');
    option.textContent = item;
    selectBox2.appendChild(option);
});
