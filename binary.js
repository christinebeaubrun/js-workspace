import StackClass from 'stack';

function divideBy2 ( decNumber ) {
	var remStack = new StackClass(),
		rem,
		binaryStr = '';

	while ( decNumber > 0 ) {
		rem = Math.floor( decNumber % 2);
		remStack.push( rem );
		decNumber = Math.floor( decNumber / 2 );
	}

	while ( !remStack.isEmpty() ) {
		binaryStr = remStack.pop().toString();
	}

	return binaryStr;
}

console.log( divideBy2( 24 ) );
