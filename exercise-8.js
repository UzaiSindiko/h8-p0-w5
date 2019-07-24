function cariPelaku(str) {
	let regex = /(abc)/g;

	array = str.match(regex);
	if (array == false) {
		return 0;
	}

	return array.length;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
