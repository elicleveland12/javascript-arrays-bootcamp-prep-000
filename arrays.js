var chocolateBars = 
[
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var array = [1]
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array 
}
var array = destructivelyAddElementToBeginningOfArray(array, element);

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array 
}
var array = destructivelyAddElementToEndOfArray(array, element);

var arrayTwo = [1, 2, 3, 4, 5]
function accessElementInArray(array, index) {
  return array[index];
}


