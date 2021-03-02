const form = document.querySelector("form");

const username = form.elements[0];
username.style.marginBottom = "15px";

username.onfocus = (e) => {
   e.target.style.boxShadow = "5px 5px blue";
}
username.onblur = (e) => {
   e.target.style.boxShadow = null;
}

const password = form.elements[1];
password.onfocus = (e) => {
   e.target.style.boxShadow = "5px 5px green";
}
password.onblur = (e) => {
   e.target.style.boxShadow = null;
}

form.onsubmit = (e) => {
    e.preventDefault();

    alert(`username: ${username.value}, password: ${password.value}`)
}

