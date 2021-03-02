const form = document.querySelector("form");
const select = document.querySelector("select");

form.onsubmit = (e) => {
    const index = select.selectedIndex;
    const selectedCountry = select.options[index].innerText;
    const optionValue = select.options[index].value;

    e.preventDefault();
    alert(`${selectedCountry} has been selected and it has ${optionValue} as id`)
}