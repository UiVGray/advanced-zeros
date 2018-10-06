module.exports = function getZerosCount(number, base) {
	let multNumb = Math.log2(base);
	let multNumbFact = 0;
	let multiple = [];
	let numMultiple = [];

	for (let j = 2; j < base; j++) {
		if (base % j === 0) {
			let isUnique = true;
			for (let i = 0; i < multiple.length; i++) {
				if (j % multiple[i] === 0) {
					let checkMult = j;
					let numMult = 1;
					while(checkMult > 1){
						if (checkMult % multiple[i] === 0) {
							checkMult = checkMult / multiple[i];
							numMult++;
						}else{
							break;
						}
					}
					let alreadyExist = false;
					for (let k = 0; k < numMultiple.length; k++) {
						if (numMultiple[k][0] === multiple[i]) {
							numMultiple[k][1] += numMult;
							alreadyExist = true;
						}
					}
					if (!alreadyExist) {
						numMultiple.push([multiple[i], numMult]);
					}
					isUnique = false;
					break;
				}
			}

			if (isUnique) {
				multiple.push(j);
				numMultiple.push([j, 1]);
				multNumbFact++;
			}
		}
	}
	let divider = 0;
	let divCount = 0;
	if (numMultiple.length > 0) {
		divider = numMultiple[numMultiple.length - 1][0];
		divCount = numMultiple[numMultiple.length - 1][1];
	}else{
		divider = base;
		divCount = 1;
	}

	let floor = Math.floor(number / divider);
	let result = 0;
	while(floor !== 0){
		result += floor;
		floor = Math.floor(floor / divider);
	}
	if (divCount % 2 === 0) {
		result = Math.floor(result / 2);
	}
	return result;
}