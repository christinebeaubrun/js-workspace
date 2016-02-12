var averageTemp = [];
averageTemp[ 0 ] = [72,75,79,79,81,81];
averageTemp[ 1 ] = [81,79,75,75,73,72];

// iterating over matrix
function myMatrix ( matrix ) {
	for (var row = 0; row < matrix.length; row++) {
		for (var column = 0; column < matrix[ row ].length; column++) {
			// console.log( matrix[ row ][ column ] );
		};
	};
}

myMatrix( averageTemp );

// create a 3x3 matrix
function createMatrix () {
	var matrix3x3x3 = [];

	for (var row = 0; row < 3; row++){
		matrix3x3x3[ row ] = [];
		for ( var column = 0; column < 3; column++ ){
			matrix3x3x3[ row ][ column ] = [];
			for ( var depth = 0; depth < 3; depth++ ){
				matrix3x3x3[ row ][ column ][ depth ] = row + column + depth;
			}
		}
	}

	// console.log( matrix3x3x3 );
};

createMatrix();

/*
		Extend JavaScript array object
*/

Array.matrix = function (numrows, numcols, initial) {
	var arr = [];
	for ( var row = 0; row < numrows; row++ ) {
		var columns = [];
		for ( var column = 0; column < numcols; column++ ) {
			columns[ column ] = initial;
		}
		arr[ row ] = columns;
	}
	return arr;
}

var nums = Array.matrix( 5, 5, 0 );
var names = Array.matrix( 3, 3, '' );
names[ 1 ][ 2 ] = "Joe";
// console.log( 'nums: ', names );

/*
		Compute the average for reach student's grades by adding each grade on the row to a total variable
		and then diving total by the total number of grades on that row
*/
function averageRowCol () {
	var grades = [ [89,77,78], [76, 82, 81], [91,94,89] ];
	var total = 0;
	var average = 0.0;
	for ( var row = 0; row < grades.length; row++ ) {
		// console.log( 'row: ', grades[ row ]);
		for ( var col = 0; col < grades[ row ].length; col++ ) {
			total += grades[ row ][ col ];
		}
		average = total / grades[ row ].length;
		// console.log( " Average: " + average );
		total = 0.0;
		average = 0.0;
	}
}

averageRowCol();

/*
		Outer loop controls the columns and the inner loop controls the rows
*/

function averageColRow () {
	var grades = [ [89, 77, 78], [76, 82, 81], [91, 94, 89] ];
	var total = 0;
	var average = 0.0;

	for ( var col = 0; col < grades.length; col++ ) {
		// console.log( "Col: ", grades[ col ] );
		for ( var row = 0; row < grades[ col ].length;  row++ ) {
			total += grades[ row ][ col ];
		}
		average = total / grades[ col ].length;
		// console.log( " Average: " + average );
		total = 0.0;
		average = 0.0;
	}
}

averageColRow()