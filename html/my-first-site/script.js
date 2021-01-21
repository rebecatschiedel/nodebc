window.onload = function() {
    var button = document.querySelector('button');

    button.addEventListener('click', function() {
       document.querySelector('#change').innerHTML = "Time to start a new project!";
    });
}