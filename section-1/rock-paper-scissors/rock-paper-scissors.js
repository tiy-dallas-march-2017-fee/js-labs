
function whoWins(first, second) {
  if (first === 'rock' && second === 'scissors') {
    return 'first';
  }
  else if (first === 'scissors' && second === 'rock') {
    return 'second';
  }
  else if (first === second) {
    return 'tie';
  }
}
