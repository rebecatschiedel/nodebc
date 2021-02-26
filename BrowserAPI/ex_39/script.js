const firstButton = document.querySelector("#firstButton");

let counter = 0;
firstButton.ondblclick = function () {
    document.querySelector('div').innerText = ++counter;
}
