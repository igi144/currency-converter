{
    const calculateResult = (amount, currency) => {
        const EUR = 4.70
        const USD = 4.52
        const GBP = 5.47

        switch (currency) {
            case "EUR":
                return amount * EUR


            case "USD":
                return amount * USD


            case "GBP":
                return amount * GBP

        }
    };

const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const amount = +amountElement.value;
    const currency = currencyElement.value;
    let result = calculateResult(amount, currency)

    resultElement.innerHTML = result;

}

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();



}
