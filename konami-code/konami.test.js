import Konami from './konami.js';

describe('Konami', () => {
	function emitKey(key) {
		const event = new KeyboardEvent('keydown', { key });
		document.dispatchEvent(event);
	}

	describe('.start', () => {
		const keys = ['a'];

		beforeEach(() => Konami.stop());

		it('listens to the keys provided', () => {
			const listener = jest.fn();
			Konami.start(listener, keys);
			emitKey('a');

			expect(listener.mock.calls.length).toBe(1);
		});

		it('does not trigger the listener if the wrong key is provided', () => {
			const listener = jest.fn();
			Konami.start(listener, keys);
			emitKey('b');

			expect(listener.mock.calls.length).toBe(0);
		});

		fit('uses the konami code by default', () => {
			const listener = jest.fn();
			Konami.start(listener, keys);
			Konami.KONAMI_CODE.forEach(key => emitKey(key));

			expect(listener.mock.calls.length).toBe(1);
		});
	});

	describe('.stop', () => {
		it('eliminates listener when called', () => {
			const listener = jest.fn();
			Konami.start(listener, ['a', 'b']);
			emitKey('a');
			Konami.stop();
			emitKey('b');

			expect(listener.mock.calls.length).toBe(0);
		});
	});
});
