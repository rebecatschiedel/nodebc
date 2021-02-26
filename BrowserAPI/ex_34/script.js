const firstButton = document.querySelector('button');

const secondButton = document.getElementById('secondButton');

const greeting = () => alert('You clicked an event listened element');

firstButton.addEventListener('click', greeting);


firstButton.addEventListener('mouseover', () => {
    firstButton.innerText = 'DONT TOUCH ME!!!';
    firstButton.style.backgroundColor = 'red';
});


secondButton.onclick = () => {
    firstButton.removeEventListener('click', greeting);
}