let cutPizzaSlices = 8;
function sharePizza(number) {
    let numberSlices = cutPizzaSlices / number;
    numberSlices = numberSlices.toFixed(2);
    return `Each person gets ${numberSlices} slices of pizza`;
}

console.log(sharePizza(2));
console.log(sharePizza(3)); 