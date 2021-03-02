const form = document.querySelector("form");

form.onsubmit = (e) => {
    e.preventDefault();

    // const selected = Array.from(form.elements).filter(element =>
    // (element.checked) && element);

    const selected = document.querySelectorAll("input:checked");

    if(selected.length === 0) 
    alert("Please at least select a superheroe");

    else if(selected.length === 1)
    alert(`The best superheroe is: ${selected[0].value}`);
    
    else if(selected.length > 1) {
        // const bestHeroes = selected.reduce((accumulator, currentValue) =>
        // accumulator + ", " + currentValue.value, "" );

        let bestHeroes = selected[0].value;
        for(let i = 1; i < selected.length; i++) {
            bestHeroes += ", " + selected[i].value;
        }
        alert(`The best superheores are: ${bestHeroes}`)
    }

}

