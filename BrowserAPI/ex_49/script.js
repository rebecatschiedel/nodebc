const form = document.querySelector("form");

const username = form.elements[0];
const password = form.elements[1];

form.onsubmit = (e) => {
    e.preventDefault();

   if ((username.value === '') || (password.value === '')) {
       username.classList.add('error');
       password.classList.add('error');

       alert('Please input a username and password');
   }
}