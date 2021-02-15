function revert(text) {
    return text.split("").reverse().join("");
}

console.log(revert("How"));
console.log(revert("is"));
console.log(revert("it"));
console.log(revert("going"));
console.log(revert("Stranger"));

function reverseString(text) {
    if(text === "") return "";
    else return reverseString(text.substr(1)) + text.charAt(0);
}

console.log(reverseString("Hello"));