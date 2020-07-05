const Konami = require('./konami.js');

describe('Konami', () => {
	describe('.start', () => {
		const keys = ['a'];

		it('appends listener matching keys provided', () => {
			const listener = jest.fn();
			Konami.start(listener, keys);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));

			expect(listener.mock.calls.length).toBe(1);
		});
	});
});
