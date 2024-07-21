const repeatString = function (word, amount) {
    if (amount < 0) {
        return "ERROR";
    }
    let string = "";
    for (let i = 0; i < amount; i++) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
