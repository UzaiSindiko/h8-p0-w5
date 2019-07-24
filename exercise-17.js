function kaliTerusRekursif(angka) {
	angka = '' + angka;

	if (angka.length > 1) {
		let result = 1;
		for (let i = 0; i < angka.length; i++) {
			result *= angka[i];
		}
		return Number(kaliTerusRekursif(result));
	}

	return Number(angka);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
