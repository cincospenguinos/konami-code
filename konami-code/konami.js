import Pattern from './model/pattern.js';

class Konami {
	static KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
		'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

	static ListeningPattern = null;

	static start(listener, keys = Konami.KONAMI_CODE) {
		if (Konami.ListeningPattern === null) {
			const pattern = new Pattern(keys);
			document.addEventListener('keydown', (event) => {
				pattern.keyPressed(event.key);

				if (pattern.isComplete) {
					listener();
				}
			});

			Konami.ListeningPattern = pattern;
		}
	}

	static stop() {

	}
}

module.exports = Konami;