var expect = require( 'chai' ).expect;
import StackClass from 'stack';
var myStack;
/*
		LAST IN, FIRST OUT
*/

beforeEach( function () {
	myStack = new StackClass();
});

afterEach( function () {
	myStack = null;
});


describe( 'myStack instance', function () {
	it( 'should have all its properties', function () {
		expect( myStack ).to.have.all.keys( 'push', 'pop', 'peek', 'isEmpty', 'clear', 'size' );
	});

	describe( 'isEmpty', function () {
		it( 'should return false if its stack is empty', function () {
			expect( myStack.isEmpty() ).to.be.true;
		});

		it( 'should return false if its stack is not empty', function () {
			myStack.push( 1 );
			expect( myStack.isEmpty() ).to.be.false;
		});
	});

	describe( 'push', function () {
		it( 'should accept one element to be pushed', function () {
			myStack.push( 26 );
			expect( myStack.isEmpty() ).to.be.false;
		});

		it( 'should accept an array of elements to be pushed', function () {
			var elements = [ 1, 2, 3, 45 ];
			myStack.push( elements );
			expect( myStack.isEmpty() ).to.be.false;
		});
	});

	describe( 'pop', function () {
		it( 'should return the last element pushed', function () {
			var elements = [ 1, 2, 3, 45 ];
			var lastElement = elements[ elements.length - 1 ];
			myStack.push( elements );
			expect( myStack.pop() ).to.equal( lastElement );
		});
	});

	describe( 'peek', function () {
		it( 'should reveal the last element added to the stack', function () {
			var firstEle = 13,
				secondEle = 26;

			myStack.push( [ firstEle, secondEle ] );
			expect( myStack.peek() ).to.equal( secondEle );
		})
	});

	describe( 'clear', function () {
		it( 'should clear all the elements in the stack', function () {
			var elements = [ 1, 2, 3, 4, 5 ];
			myStack.push( elements );
			myStack.clear();
			expect( myStack.size() ).to.equal( 0 );
		});
	});

	describe( 'size', function function_name (argument) {
		it( 'should return the size of the stack', function () {
			var elements = [ 1, 2, 3, 4, 5 ];
			myStack.push( elements );
			expect( myStack.size() ).to.equal( elements.length );
		});
	})
});
