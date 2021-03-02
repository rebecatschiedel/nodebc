const form = document.querySelector('form');



form.onsubmit = function(event) {
    let username = form.elements[0].value;
    let password = form.elements[1].value;
    let submit= form.elements[2].value;


    alert(username);
    alert(password);
    alert(submit);

    event.preventDefault();
}

