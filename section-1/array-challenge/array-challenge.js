function arrayReverser(arr) {
  var output = [];

  //Do magic here
  for (var i = arr.length - 1; i > -1; i--) {
    output.push(arr[i]);
  }

  return output;
}

function sumArrayOfNumbers(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function numbersOver10(arr) {
}

function numbersOverX(arr, num) {
}

function stringsLongerThanFourLetters(arr) {
}

function stringsLongerThanXLetters(arr, length) {
}
