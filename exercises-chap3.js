/*
		A List ADT ( abstract data type )
		-- useful when not performing searches on the items in the list or put them into some 
				type of sorted order
		-- NOT useful when performing long searches or complex sorts
*/

/* Write a function that inserts an element into a list only if the element to be inserted
		is larger than any of the elements currently in the list. Larger can mean either greater
		than when working with numeric values, or further down in the alphabet, when
		working with textual values.
*/

function Stack () {
	var storage = [];

	this.push = function (elements) {
		storage = storage.concat( [].concat( elements ) );
	},
	this.pop = function () {
		return storage.pop();
	},
	this.peek = function () {
		return storage[ storage.length - 1 ];
	},
	this.clear = function () {
		storage.length = 0;
	},
	this.size = function () {
		return storage.length;
	},
	this.isEmpty = function () {
		return ( storage.length === 0 );
	}
};

var myStack = new Stack();

console.log( myStack );

myStack.insertIfGreater = function ( ele ) {
	var isGreater = this.storage.every( function ( item ) {
		return ele > item;
	});
	if ( isGreater ) this.push( ele );
}

console.log( myStack );

myStack.push( [1,2,3,9,8,7,24,35,46] );
myStack.insertIfGreater( 123987243546 );
console.log( myStack.peek() );