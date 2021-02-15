function getShapePerimeter(base, height) {
    if (base === height) return 4 * base;
    return 2 * (base + height);
}

const perimeter = getShapePerimeter(100,20);

console.log(`${perimeter} is the shape perimeter`);
console.log(perimeter > 100 ? "Perimeter is too big" : "Perimeter is fine");