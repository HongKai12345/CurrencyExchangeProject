import { API_KEY } from "./API_KEY.js";
import { countryCodes } from "./countryCode.js";

async function getCurrency(fromCurrency,toCurrency,amount){
    const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    const response = await fetch(URL);

    if (!response.ok){
        throw new Error('Could not fetch data');
    }

    return await response.json();
};

async function displayRates(fromCurrency,toCurrency,amount){
    try{
        const currencyData = await getCurrency(fromCurrency,toCurrency,amount);

        console.log(currencyData);
        console.log(`To amount: ${currencyData.conversion_result.toFixed(2)}`);
        console.log(`From amount: ${amount}` );
        document.querySelector('.displayExchange').style.visibility = "visible";
        document.querySelector('.displayExchange-js').textContent = `${amount} ${fromCurrency} = ${currencyData.conversion_result.toFixed(2)} ${toCurrency}`;
    }
    catch (error){
        console.error(error);
    }
};

const selectBox1 = document.querySelector('.selectBox1-js');
const selectBox2 = document.querySelector('.selectBox2-js');
const exchangeButton = document.querySelector('.exchangeButton-js');
const input = document.querySelector('.inputBox-js');

//Add currency symbols to first select box
countryCodes.forEach(item=>{
    const option = document.createElement('option');
    option.textContent = item;
    option.value = item;
    selectBox1.appendChild(option);
});

//Add currency symbols to second select box
countryCodes.forEach(item=>{
    const option = document.createElement('option');
    option.textContent = item;
    option.value = item;
    selectBox2.appendChild(option);
});

//when pressing exchange button
exchangeButton.addEventListener('click',()=>{
    let inputValue = document.querySelector('.inputBox-js').value;
    let selectBox1Value = document.querySelector('.selectBox1-js').value;
    let selectBox2Value = document.querySelector('.selectBox2-js').value;
    if (inputValue === ''){
        alert('Please enter a value!');
    }
    else if (inputValue < 0){
        alert('Please input a positive number');
    }
    else{
        displayRates(selectBox1Value,selectBox2Value,inputValue);
        // console.log(inputValue);
        // console.log(selectBox1Value);
        // console.log(selectBox2Value);
    }
});

//Adds event listener to input box to check if input has more than
//2 decimal places
input.addEventListener('input', (e)=>{
    const value = e.target.value;

    //check if the number has more than 2 decimal places
    if (value.includes('.')){
        const decimalPart = value.split('.')[1];
        if (decimalPart.length > 2){
            //Limit the input to 2 decimal places
            e.target.value = parseFloat(value).toFixed(2);
        }
    }
})

