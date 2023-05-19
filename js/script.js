const calculateResult = (amount, currency) => {
    const rateEUR = 4.75;
    const rateUSD = 4.48;
    const rateEGP = 0.13;

    switch (currency) {
        case "EUR":
            return amount * rateEUR;

        case "USD":
            return amount * rateUSD;

        case "EGP":
            return amount * rateEGP;
    }
};

const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
}

const onFormSubmit = (event) => {
    event.preventDefault();


    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const submitElement = document.querySelector(".js-submit");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);

};

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
};

init();
