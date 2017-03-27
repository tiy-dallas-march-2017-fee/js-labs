

describe('You can use for loops', function() {

  it('to do something a certain number of times', function() {

    var sum = 0;
    //Use a for loop to add 2 to this number 5 times.
    for (var i = 0; i < 5; i++) {
      sum += 2;
    }

    chai.assert.equal(sum, 10);
  });

  it('with arrays to sum the values.', function() {
    var arrayOfNumbers = [7, 12, 33, 4, 1];

    var sum = 0;
    //Use a for loop to sum the values.
    for (var i = 0; i < arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
    }

    chai.assert.equal(sum, 57);
  });

  it('with arrays to sum the values so you can average them.', function() {
    var arrayOfNumbers = [7, 12, 33, 4];

    var sum = 0;
    //Use a for loop to sum the values then compute the average.

    var average;

    chai.assert.equal(average, 14);
  });

  it('with arrays sum up all the odd numbers.', function() {
    var arrayOfNumbers = [7, 12, 33, 4];

    var sumOfOdds = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] % 2 === 1) {
        sumOfOdds += arrayOfNumbers[i];
      }
    }

    chai.assert.equal(sumOfOdds, 40);
  });

  it('with arrays sum up all the even numbers.', function() {
    var arrayOfNumbers = [7, 12, 33, 4];

    var sumOfEvens = 0;

    chai.assert.equal(sumOfEvens, 16);
  });

  it('with arrays to copy and change the contents.', function() {
    var names = ['Fred', 'Bob', 'Beowulf'];

    //When you do this, you'll create a new array and use a loop to get the items.
    //In this case, loop over the names to create a new array of greetings, "Hello Fred!", "Hello Bob!", and "Hello Beowulf!"
    var greetings = [];

    for (var i = 0; i < names.length; i++) {
      var greeting = 'Hello ' + names[i] + '!';
      greetings.push(greeting);
    }

    //write for loop {
      //create the greetings
      //put them in the new array
    //}

    chai.assert.equal(greetings[0], 'Hello Fred!');
    chai.assert.equal(greetings[1], 'Hello Bob!');
    chai.assert.equal(greetings[2], 'Hello Beowulf!');
  });

});


describe('You can use while loops', function() {

  it('to sum the values of an array.', function() {
    //Anything you can use a for loop for, you can use a while loop
    var arrayOfNumbers = [7, 12, 33, 4];

    var sum = 0;
    //Use a while loop to sum the values.

    var i = 0;
    while(i < arrayOfNumbers.length) {
      sum += arrayOfNumbers[i];
      i++;
    }

    chai.assert.equal(sum, 56);
  });

  t('to loop through an array of prices until you are out of money.', function() {
    //It would be super nice to have the names associated with these prices. Objects will show us a good way to do that.
    var prices = [12.00, 5.00, 45.73, 3.45, 15.12, 1.23, 10.23, 20.99, 5.67, 32.55];
    var yourBudget = 100;
    var moneySpent = 0;


    //Use a while loop to buy things until you can't buy things anymore.

    var i = 0;
    while(moneySpent + prices[i] < yourBudget) {
      moneySpent += prices[i];
      i++;
    }

    chai.assert.equal(moneySpent, 92.76);
  });

});
