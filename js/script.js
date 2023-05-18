const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const submitElement = document.querySelector(".js-submit");

const rateEUR = 4.75;
const rateUSD = 4.48;
const rateEGP = 0.13;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

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