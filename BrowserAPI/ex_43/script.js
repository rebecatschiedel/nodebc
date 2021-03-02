const form = document.querySelector('form');
console.log(form);

const action = form.action;
const method = form.method;
const enctype = form.enctype;
const name = form.name;


const div = document.querySelector('div');
div.innerText = 'Action: ' + action + ' Method: ' + method + ' Enctype: ' + enctype + ' Name: ' + name;