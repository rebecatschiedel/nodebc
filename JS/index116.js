function getHexaColor(color) {
    switch (color.toLowerCase()) {
        case "white":
            return "#FFFFFF";
        case "black":
            return "#000000";
        case "blue":
            return "#0b24fb";
        case "green":
            return "#0e7e12";
        case "yellow":
            return "#fffd38";
        case "pink":
            return "#fec1cc";
        default:
            return "available colors are: white, black, blue, green, yellow and pink";
    }
}

console.log(getHexaColor("white"));
console.log(getHexaColor("black"));
console.log(getHexaColor("BLUE"));
console.log(getHexaColor("green"));
console.log(getHexaColor("yellow"));
console.log(getHexaColor("pink"));
console.log(getHexaColor("magenta"));