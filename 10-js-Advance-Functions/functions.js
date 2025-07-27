// Passing data into functions with parameters

let age = 21;
let totalAdultYears;

function calculateAdultYears(userAge) {
    return userAge - 18;
}

totalAdultYears = calculateAdultYears(age)
alert(totalAdultYears)

age = 45;
totalAdultYears = calculateAdultYears(age)
alert(totalAdultYears)

age = 55;
totalAdultYears =  calculateAdultYears(age)
alert(totalAdultYears)

// Now we don't have to do the calculations every time for adult years
// and it is due to the functions
// In the previous example, we had to calculate adult years multiple times
