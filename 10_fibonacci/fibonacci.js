const fibonacci = function (number) {
    if (typeof number !== "number") {
        number = parseInt(number)
    }

    if (number < 0) return "OOPS";

    let results = [0, 1];
    if (number < 2) return results[number];

    for (let i = 0; i <= number; i++) {
        if (i >= 2) {
            let currentAnswer = results[i - 1] + results[i - 2];
            results.push(currentAnswer);
        } else {
            currentAnswer = results[i];
        }
    }
    return results[number];
};

// Do not edit below this line
module.exports = fibonacci;
