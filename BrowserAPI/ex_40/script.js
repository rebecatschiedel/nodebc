const link = document.querySelector("a");

let counter = 0;
link.onmouseover = () => {
    switch (++counter) {
        case 1:
            link.style.backgroundColor = 'red';
            break;
        case 2:
            link.style.backgroundColor = 'blue';
            break;
        case 3:
            link.style.backgroundColor = 'green';
            break;
        case 4:
            link.style.backgroundColor = 'gray';
            break;
        default:
            link.style.backgroundColor = 'white';
            break;
    }
}
link.onmouseout = () => {
    alert(`The link background color is ${link.style.backgroundColor}`)
}