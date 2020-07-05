import Pattern from './model/pattern.js';

class Konami {
	static KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
		'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

	static Listener = null;

	static start(listener, keys = Konami.KONAMI_CODE) {
		if (Konami.Listener === null) {
			const pattern = new Pattern(keys);
			document.addEventListener('keydown', (event) => {
				pattern.keyPressed(event.key);

				if (pattern.isComplete) {
					listener();
				}
			});

			Konami.Listener = listener;
		}
	}

	static stop() {
		if (Konami.Listener) {
			document.removeEventListener('keydown', Konami.listener);
			Konami.Listener = null;
		}
	}
}

module.exports = Konami;
