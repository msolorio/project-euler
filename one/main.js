// finds the sum of the multiples of the given arguments 
// within a specified limit.
const multiplesOf = [3, 5];
const limit = 1000;

//returns an array of multiples
const findMultiples = (limit, ...multiplesOf) => {
	const multiples = [];

	const numIsMultiple = (i, ...multiplesOf) => {
		for (let j=0, k=multiplesOf.length; j<k; j++) {
			if (i % multiplesOf[j] === 0) {
				return true;
			}
		}
	}

	for (let i=0, h=limit; i<h; i++) {
		if (numIsMultiple(i, ...multiplesOf)) {
			multiples.push(i);
		}
	}
	return multiples;
}

const addMultiples = (array) => {
	const sum = array.reduce((a, b) => {
		return a + b;
	});
	return sum;
}

const multiples = findMultiples(limit, ...multiplesOf);

const sum = addMultiples(multiples);

const sumEl = document.getElementById('js-total');
const sumText = document.createTextNode(sum);
sumEl.appendChild(sumText);
