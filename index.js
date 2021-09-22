const returnFirstTwoDrivers = function(newArr){
   return newArr.slice(0,2);
}

const returnLastTwoDrivers = function(newArr){
    return newArr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return fare => fare * multiplier
}

const fareDoubler = createFareMultiplier(2); 

const fareTripler = (theFare) => createFareMultiplier(3)(theFare); 

function selectDifferentDrivers(arrayOfDrivers, fun){
    return 
}