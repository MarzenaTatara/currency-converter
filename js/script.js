let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let submitElement = document.querySelector(".js-submit");

let rateEUR = 4.75;
let rateUSD = 4.48;
let rateEGP = 0.13;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount * rateEUR;
            break;

        case "USD":
            result = amount * rateUSD;
            break;

        case "EGP":
            result = amount * rateEGP;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
})  