const firstButton = document.querySelector('button');

firstButton.addEventListener('click', () => alert('You clicked an event listened element'));

firstButton.addEventListener('mouseover', () => {
    firstButton.innerText = 'DONT TOUCH ME!!!';
    firstButton.style.backgroundColor = 'red';
});