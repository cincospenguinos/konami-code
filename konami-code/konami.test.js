import Konami from './konami.js';

describe('Konami', () => {
	describe('.start', () => {
		const keys = ['a'];

		it('listens to the keys provided', () => {
			const listener = jest.fn();
			Konami.start(listener, keys);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }));

			expect(listener.mock.calls.length).toBe(1);
		});

		it('does not trigger the listener if the wrong key is provided', () => {
			const listener = jest.fn();
			Konami.start(listener, keys);
			document.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }));

			expect(listener.mock.calls.length).toBe(0);
		});
	});
});
