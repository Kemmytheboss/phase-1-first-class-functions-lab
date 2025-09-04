// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2)
}


const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

// selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

// createFareMultiplier higher order function
function createFareMultiplier(multiplier){
    return function (fare) {
        return fare * multiplier;
    }
};

// fareDoubler
const fareDoubler = createFareMultiplier(2);

// fareTripler
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers
function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
}