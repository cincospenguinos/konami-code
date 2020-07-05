import Pattern from './model/pattern.js';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
		'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
let Listener = null;

class Konami {
	static start(listener, keys = KONAMI_CODE) {
		if (Listener === null) {
			const pattern = new Pattern(keys);
			document.addEventListener('keydown', (event) => {
				pattern.keyPressed(event.key);

				if (pattern.isComplete) {
					listener();
				}
			});

			Listener = listener;
		}
	}

	static stop() {
		if (Listener) {
			document.removeEventListener('keydown', Listener);
			Listener = null;
		}
	}
}

module.exports = Konami;
