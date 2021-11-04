const form = document.querySelector('form');
const factDive = document.querySelector('.number-fact');

form.addEventListener('submit',  (e) => {
    e.preventDefault();
    const number =  e.target.querySelector('input[type="number"]').value;
    const loadText = 'Wait a little bit';
    factDive.innerHTML = loadText;
    const baseURL = 'https://cors-anywhere.herokuapp.com/http://numbersapi.com/';
    fetch(baseURL + number, {
        method: "GET",
        headers: {
            'x-requested-with': "text/plan"
        }
    })
    .then(response => response.text())
    .then(text => factDive.innerHTML = text)
})