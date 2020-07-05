class Pattern {
	constructor(pattern) {
		this.pattern = pattern;
		this.currentIndex = 0;
	}

	keyPressed(key) {
		if (key === this.expectedKey) {
			this.currentIndex += 1;
		} else {
			this.currentIndex = 0;
		}
	}

	get isComplete() {
		return this.currentIndex >= this.pattern.length;
	}

	get expectedKey() {
		return this.pattern[this.currentIndex];
	}
}

module.exports = Pattern;
