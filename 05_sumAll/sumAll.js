const sumAll = function (num1, num2) {
    let sum = 0;
    let minNumber = 0
    let maxNumber = 0;

    if (num1 < num2) {
        minNumber = num1;
        maxNumber = num2;
    } else {
        minNumber = num2;
        maxNumber = num1;
    }

    if (minNumber < 0) {
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else {
        for (let i = minNumber; i < maxNumber; i++) {
            sum += i;
        }
        sum += maxNumber;
        return sum;
    }
}

// Do not edit below this line
module.exports = sumAll;
