const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = 'From JavaScript'; 

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    const locationValue = searchElement.value;

    fetch('/weather/?address='+locationValue).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error);
            messageOne.textContent = data.error;
        } else {
            console.log(data.location);
            messageOne.textContent = data.location;
            console.log(data.forecast);
            messageTwo.textContent = data.forecast;
        }
    });
});
});