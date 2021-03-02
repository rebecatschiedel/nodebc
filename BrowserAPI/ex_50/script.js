const form = document.querySelector("form");

const username = form.elements[0];
const password = form.elements[1];
const email = form.elements[3];

username.setAttribute('placeholder', 'username');
password.setAttribute('placeholder', 'password');
email.setAttribute('placeholder', 'email');

const validateValue = value => {
    const regex = /^[a-zA-Z0-9]+$/;

    return regex.test(value)
}
  
const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    return emailRegex.test(email);
}

form.onsubmit = (e) => {
    e.preventDefault();

   if ((username.value === '') || (password.value === '')) {
       username.classList.add('error');
       password.classList.add('error');

       alert('Please input a username and password');
   }

   if (!validateValue(username.value)) {
    alert('Incorrect username');

}
   if (!validateValue(password.value)) {
    alert('Incorrect password');
   }

   if (!validateEmail(email.value)) {
    alert('Incorrect Email');
   }
}