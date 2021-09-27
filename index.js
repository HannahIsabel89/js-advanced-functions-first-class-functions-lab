const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const drivers = ['Hannah', 'Faye', 'Marc', 'Kate'];

let result = returnFirstTwoDrivers(drivers);
console.log("result1: ", result);

let result1 = returnLastTwoDrivers(drivers);
console.log("result2: ", result1);

const createFareMultiplier = function (multiplier) {
return function (fare) {
  return fare * multiplier;
}
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let totalFare = fareDoubler(30);
console.log ('Total doubled fare: ', totalFare);

let totalFare2 = fareTripler(30);
console.log ('Total tripled fare: ', totalFare2);

const selectDifferentDrivers = function (drivers,driversToReturn) {
return driversToReturn(drivers);
}
let selectedDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log('selectedDrivers: ', selectedDrivers);
