var numbers = [1,2,3,4,5,6,7,8,9] // initialize numbers

/*
		To add an element to the zero position of the numbers array
		the following action is performed
*/

// index set to the length of numbers array or 9 which is greater than zero
// subtract to decrease

for (var index = numbers.length; index >= 0; index--) {
	// starting at element 9, which has index 8 this loop pushes everything
	// to the right
	// element 9 is at index 9; element 8 is at index 8; etc
	numbers[ index ] = numbers[ index - 1 ];
};
// at the end index 0 is undefined so we set to -1
numbers[ 0 ] = 0;
numbers.unshift( -2, -1 ); // adds element(s) to the beginnning of an array
numbers.shift(); // removes the first element in the array
numbers.push( 10, 11, 12 ); // adds element(s) to the end of an array
numbers.pop(); // removes the last element in the array
numbers.splice( 2, 3); // starting at the specified index, it removes all element(s) according to the delete count
numbers.every(function () {}) // checks if all elements are true via iteration and stops executing if one element is false
numbers.every(function () {}) // checks if one element is true and continues to iterate until true is achieved

console.log( 'numbers: ', numbers);
