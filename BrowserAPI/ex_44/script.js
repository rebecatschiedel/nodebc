const form = document.querySelector('form');

const button = document.querySelector('button');


button.onclick = function(e) {
    let username = form.elements[0].value;
    let password = form.elements[1].value;

    
    if (!username) 
    username = "Morty";
     
    !password && (password = 12345);

    alert(username);
    alert(password);

    e.preventDefault();
}

form.onsubmit = (e) => {
    e.preventDefault();
}

