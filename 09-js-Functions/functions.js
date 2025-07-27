let age = 21;
let adultYears;

// age = 40;
// adultYears = age - 18;
// alert(adultYears)

// age = 45;
// adultYears = age - 18;
// alert(adultYears)

// age = 55;
// adultYears = age - 18;
// alert(adultYears)

// You can clearly see that we have duplication in our code 
// To tackle down this duplication we have "Functions" in javascript

function calculateAdultYears() {
    adultYears = age - 18;
}

calculateAdultYears()
alert(adultYears)

age = 45;
calculateAdultYears()
alert(adultYears)

age = 55;
calculateAdultYears()
alert(adultYears)

// Now we don't have to do the calculations every time for adult years
// and it is due to the functions