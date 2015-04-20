// 1. Write a function palindrome that takes a single string parameter and returns true if the parameter is a palindrome (the string is the same forward as it is backward), otherwise returns false. For example: palindrome("racecar") should return true because "racecar" is also "racecar" backwards.



var palindrome = function(str){
	var strReverse = str.split('').reverse().join('');
	console.log(strReverse);
	var symmetrical = (strReverse === str);
	return symmetrical ? true : false;
};

console.log(palindrome('racecar'));


// 2. Write a function dashInsert that takes a single num parameter and returns the num with inserted dashes ('-') between adjacent odd digits. For example: if num is 454793 the output should be "4547-9-3".
// 
var dashInsert = function(num){
	var arr = num.toString().split('');
	console.log(arr);
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i] % 2 !== 0) && (arr[i +1] % 2 !== 0 )) {
			newArr.push(arr[i]);
			console.log('test');
			newArr.push('-');
		}
		else {
			newArr.push(arr[i]);
		} // return newArr;
	}

	console.log(arr);
	console.log(newArr);

	var numStr= newArr.join('');


	if (numStr.charAt(numStr.length-1) === '-') {
		return numStr.slice(0, numStr.length-1);
		
	}

	return numStr.join(',');
	};

console.log(dashInsert('454793'));

var cipher = 'batman';
console.log(cipher.charCodeAt(0)+2);

var caesarCipher = function(str){
	var arr = [];
	for (var i = 0; i < str.length; i++) {
		
		var strModified = str.charCodeAt(i) + 2;
		console.log(strModified);
		var cipherText = String.fromCharCode(strModified);
		arr.push(cipherText);
	} 
	for (var j = 0; j < arr.length; j++) {
		if (arr[j] === '"') {
			arr[j] = ' ';
			console.log('test');
		}
	}


	return arr.join('');

};

var results = caesarCipher("Caesar Cipher");
console.log(results);