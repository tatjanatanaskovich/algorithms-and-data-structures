// Reverse String
// Given a string, return a new string with the reversed order of characters
// --- Examples
//   reverse('tatjana') === 'anajtat'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution number 1
function reverse(str) {
	const arr = str.split('');
	arr.reverse();
	return arr.join('');
}

//The same solution just refactored code
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// Solution number 2
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Solution number 3
function reverse(str) {
	return str.split().reduce((reversed, character) => {
		return character + reversed;
	}, '');
}

//The same solution just refactored code
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}





