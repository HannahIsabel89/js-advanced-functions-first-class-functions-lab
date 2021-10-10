const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}
let result = returnFirstTwoDrivers(drivers);
console.log("First two drivers: ", result);

// last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}
let result1 = returnLastTwoDrivers(drivers);
console.log("Last two drivers: ", result1);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// fare calculator
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  }
}

const doubled = createFareMultiplier(2);

const triple = createFareMultiplier(3);

let doubledFinal = doubled(30);
console.log(doubledFinal);

let tripledFinal = triple(30);
console.log(tripledFinal);

// select other drivers
// ??? from answer guide... thought names were meant to be swapped, but maybe not?
const selectDifferentDrivers = function (drivers,driversChosen) {
  return driversChosen(drivers);
  }
let selectedDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log('selectedDrivers: ', selectedDrivers);