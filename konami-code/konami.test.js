import Konami from './konami.js';

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
		'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

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

		it('uses the konami code by default', () => {
			const listener = jest.fn();
			Konami.start(listener, keys);
			konamiCode.forEach(key => emitKey(key));

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
