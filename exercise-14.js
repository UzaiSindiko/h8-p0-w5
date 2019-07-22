function changeVocals(str) {
	var strTOArray = [];
	for (let i = 0; i < str.length; i++) {
		strTOArray.push(str[i]);
	}

	var vokal = [
		'a',
		'i',
		'u',
		'e',
		'o',
		'A',
		'I',
		'U',
		'E',
		'O'
	];
	var nextLetter = [
		'b',
		'j',
		'v',
		'f',
		'p',
		'B',
		'J',
		'V',
		'F',
		'P'
	];

	for (let j = 0; j < strTOArray.length; j++) {
		for (let k = 0; k < vokal.length; k++) {
			if (strTOArray[j] === vokal[k]) {
				strTOArray[j] = nextLetter[k];
			}
		}
	}
	return strTOArray;
}

var array = changeVocals('Sergei Dragunov');

function reverseWord(array) {
	var reverse = [];
	for (let i = array.length - 1; i >= 0; i--) {
		reverse.push(array[i]);
	}
	return reverse;
}

function setLowerUpperCase(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === array[i].toUpperCase()) {
			array[i] = array[i].toLowerCase();
		}
		else {
			array[i] = array[i].toUpperCase();
		}
	}
	return array;
}

function removeSpaces(array) {
	var noSpace = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== ' ') {
			noSpace.push(array[i]);
		}
	}
	return noSpace;
}

function passwordGenerator(name) {
	if (name.length < 5) {
		return 'Minimal karakter yang diinputkan adalah 5 karakter';
	}
	var NovowelName = changeVocals(name);
	var reversedName = reverseWord(NovowelName);
	var lowerToUpper = setLowerUpperCase(reversedName);
	var noSpaceName = removeSpaces(lowerToUpper);
	let result = '';
	for (let i = 0; i < noSpaceName.length; i++) {
		result += noSpaceName[i];
	}
	return result;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
