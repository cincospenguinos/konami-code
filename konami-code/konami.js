class Konami {
	static KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
		'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];

	static start(listener, keys) {
		document.addEventListener('keydown', () => listener());
	}

	static stop() {

	}
}

module.exports = Konami;