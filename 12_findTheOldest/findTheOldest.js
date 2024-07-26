const findTheOldest = function (people) {

    let oldest = people.sort(function (a, b) {

        for (let i = 0; i < people.length; i++) {
            if (people[i].yearOfDeath === undefined) {
                currentTime = new Date();
                people[i].yearOfDeath = currentTime.getFullYear();
            }
        }

        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;

        if (lastGuy > nextGuy) {
            return -1;
        } else {
            return 1;
        }
    })
    console.table(people);
    return oldest[0];
};


// Do not edit below this line
module.exports = findTheOldest;
