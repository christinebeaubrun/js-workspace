/*
		The object has function for adding a new temperature and computing the average of the temperatures
		stores in the object
*/

function weekTemps () {
	this.dataStore = [];
	this.add = add;
	this.average = average;
}

function add (temp) {
	// [ row, [ col 1,2,3,4,5,6,7 ] ]
	this.dataStore.push( temp );
}

function average () {
	var total = 0;
	for ( var i = 0; i < this.dataStore.length; i++ ) {
		total += this.dataStore[ i ];
	}
	return total / this.dataStore.length;
}

function  (argument) {
	// body...
}

var thisWeek = new weekTemps();
thisWeek.add( 52 );
thisWeek.add( 45 );
thisWeek.add( 20 );
console.log( thisWeek.average() );