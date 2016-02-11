var variableScope = function() {

	var myVariable = 'global';
	myOtherVariable = 'global';

	function myFunction(){
		var myVariable = 'local';
		return myVariable;
	}

	function myOtherFunction(){
		myOtherVariable = 'local';
		return myOtherVariable;
	}

	console.log( "This is myVariable: ", myVariable ); // returns global
	console.log( "This is myOtherVariable: ", myOtherVariable ); // returns global
	console.log( "This is myFunction: ", myFunction() ); // local
	console.log( "This is myOtherFunction: ", myOtherFunction() ); // local
	console.log( "This is myOtherVariable: ", myVariable ); // global
	console.log( "This is myOtherVariable: ", myOtherVariable ); // global

};

variableScope();