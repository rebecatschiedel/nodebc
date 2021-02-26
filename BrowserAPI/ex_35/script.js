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

document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    alert("This link doesn't send us to a differen page as we're preventing the default behaviour");
})