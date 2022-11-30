// Code your solution here

function findMatching(nameOfDrivers, name){
  let checkDriver = nameOfDrivers.filter(item=> item.toUpperCase() === name.toUpperCase())
  console.log (checkDriver)
  return checkDriver
}
function fuzzyMatch(nameOfDrivers, letter){
  let checkFirstLetter= nameOfDrivers.filter(item=> item.startsWith(letter));
  console.log (checkFirstLetter)
  return checkFirstLetter
}
function matchName(drivers, selection){
  let matchName= drivers.filter(item=> item.name === selection)
  console.log (matchName)
  return matchName
}


findMatching(nameOfDrivers, 'Bobby');

fuzzyMatch(nameOfDrivers, 'B');

matchName(drivers, "Bobby");





