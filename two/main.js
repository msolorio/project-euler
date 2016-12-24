const app = {

	getElements() {
		this.firstStartingInput = document.getElementById('js-firstStartingInput');
		this.secondStartingInput = document.getElementById('js-secondStartingInput');
		this.limitInput = document.getElementById('js-limitInput');
		this.submitButton = document.getElementById('js-submit');
		this.messageEl = document.getElementById('js-messageEl');
	},

	getInputValues(firstStartingInput, secondStartingInput, limitInput) {
		return [
			parseInt(firstStartingInput.value),
			parseInt(secondStartingInput.value),
			parseInt(limitInput.value)
		];
	},

	getSequence(firstStartingVal, secondStartingVal, limitVal) {
		const seq = [];
		
		seq.push(firstStartingVal, secondStartingVal);

		let lastItem = seq[seq.length - 1];
		let secondToLastItem = seq[seq.length - 2];
		let newItem = lastItem + secondToLastItem;

		while (newItem < limitVal) {
			seq.push(newItem);

			lastItem = seq[seq.length - 1];
			secondToLastItem = seq[seq.length - 2];
			newItem = lastItem + secondToLastItem;
		}

		return seq;
	},

	getEvens(array) {
		const evens = [];

		array.forEach((item) => {
			if (item % 2 === 0) {
				evens.push(item);
			}
		});

		return evens;
	},

	calcTotal(array) {
		const sum =  array.reduce((a, b) => {
			return a + b;
		}, 0);

		return sum;
	},

	printSum(sum) {
		const messageEl = this.messageEl;
		messageEl.innerHTML = `Sum of Even Terms: ${sum}`;
	},

	findSum() {
		firstStartingInput = this.firstStartingInput;
		secondStartingInput = this.secondStartingInput;
		limitInput = this.limitInput;

		const [firstStartingVal, secondStartingVal, limitVal] =
			this.getInputValues(firstStartingInput, secondStartingInput, limitInput);

		const seq = this.getSequence(firstStartingVal, secondStartingVal, limitVal);

		const evens = this.getEvens(seq);

		const sum = this.calcTotal(evens);

		this.printSum(sum);
	}
};

(function init(){
	app.getElements();
	app.submitButton.addEventListener('click', app.findSum.bind(app));
})();
