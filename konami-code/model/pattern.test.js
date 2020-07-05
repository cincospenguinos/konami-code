import Pattern from './pattern.js';

describe('Pattern', () => {
	describe('#keyPressed', () => {
		it('moves the pattern if the key provided is the next key', () => {
			const pattern = new Pattern(['a']);
			pattern.keyPressed('a');

			expect(pattern.isComplete).toBe(true);
		});

		it('does not move the pattern if the key does not match', () => {
			const pattern = new Pattern(['a']);
			pattern.keyPressed('b');

			expect(pattern.isComplete).toBe(false);
		});

		it('resets the pattern if the keys are pressed out of order', () => {
			const pattern = new Pattern(['a', 'b']);
			pattern.keyPressed('a');
			pattern.keyPressed('c');
			pattern.keyPressed('b');

			expect(pattern.isComplete).toBe(false);
		});
	});
});
