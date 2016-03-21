export default function () {
	return {
		push: function ( elements ) {
			items = items.concat( [].concat( elements ) );
		},
		pop: function () {
			return items.pop();
		},
		peek: function () {
			return items[ items.length - 1 ];
		},
		isEmpty: function () {
			return ( items.length === 0 );
		},
		clear: function () {
			items.length = 0;
		},
		size: function () {
			return items.length;
		}
	};
}