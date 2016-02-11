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

	console.log( matrix3x3x3 );
};

createMatrix();