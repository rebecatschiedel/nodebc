function sort(number1, number2, number3, highToLow = false) {
    let toBeSorted = [number1, number2, number3];

    for (let i = 1; i < toBeSorted.length; i++) {
        for(let j = 0; j < i; j++) {
            if(toBeSorted[i] < toBeSorted[j]) {
                let temp = toBeSorted[i];
                toBeSorted[i] = toBeSorted[j];
                toBeSorted[j] = temp;
            }
        }
    }
    if(highToLow) toBeSorted.reverse();

    console.log(toBeSorted);
}

sort(10,8,25, true);
sort(10,8,25);
