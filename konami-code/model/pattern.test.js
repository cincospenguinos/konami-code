const Pattern = require('./pattern.js');

describe('Pattern', () => {
	describe('#keyPressed', () => {
		it('moves the pattern if the key provided is the next key', () => {
			const pattern = new Pattern(['a']);
			pattern.keyPressed('a');
			expect(pattern.isComplete).toBe(true);
		});
	});
});
