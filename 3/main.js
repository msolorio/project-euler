const app = {

	getElements() {
		submitButton = document.getElementById('js-submit');
		startingInput = document.getElementById('js-startingValue');
		primeFactorsList = document.getElementById('js-primeFactorsList');

		return [submitButton, startingInput, primeFactorsList];
	},

	getStartingVal(startingInput) {
		return startingInput.value;
	},

	getPrimeFactors(startingVal) {
		const primeFactors = [];
		let denominator = 2;

		startingVal = parseInt(startingVal);

		if (isNaN(startingVal)) {
			return;
		}

		while (startingVal !== 1) {
			if (startingVal % denominator === 0) {
				primeFactors.push(denominator);
				startingVal = startingVal / denominator;
			} else {
				denominator++;
			}
		}

		return primeFactors;
	},

	printResult(primeFactors=[], primeFactorsList) {

		const fragment = document.createElement('div');

		if (primeFactors.length > 1) {
			const lastFactor = primeFactors[primeFactors.length-1];
			for (let i=0, j=primeFactors.length-1; i<j; i++) {
				fragment.innerHTML += `${primeFactors[i]}, `;
			}
			fragment.innerHTML += `and ${lastFactor}`;
		} else if (primeFactors.length === 0) {
			fragment.innerHTML = `input is invalid`;
		} else {
			fragment.innerHTML = `${primeFactors[0]} is a prime number`;
		}

		primeFactorsList.innerHTML = '';
		primeFactorsList.appendChild(fragment);		
	},

	findResult(startingInput, primeFactorsList) {

		const startingVal = this.getStartingVal(startingInput);

		const primeFactors = this.getPrimeFactors(startingVal);

		this.printResult(primeFactors, primeFactorsList);
	}
	
};

(() => {
	const [submitButton, startingInput, primeFactorsList] = app.getElements();
	submitButton.addEventListener('click', app.findResult.bind(app, startingInput, primeFactorsList));
})();
