function totalDigitRekursif(angka) {
	// jika input kosong
	if (angka == null) {
		return 0;
	}

	angka = angka.toString();
	if (angka == false) {
		return 0;
	}
	else {
		return totalDigitRekursif(Number(angka.slice(1))) + Number(angka[0]);
	}
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
