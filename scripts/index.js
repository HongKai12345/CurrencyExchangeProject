// import { API_KEY } from "./API_KEY.js";

// async function getCurrency(){
//     const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

//     const response = await fetch(URL);

//     if (!response.ok){
//         throw new Error('Could not fetch data');
//     }

//     return await response.json();
// };

// async function displayRates(){
//     try{
//         const currencyData = await getCurrency();

//         console.log(`Base Currency (USD): ${currencyData.conversion_rates.USD}`);
//     }
//     catch (error){
//         console.error(error);
//     }
// };

// displayRates();


