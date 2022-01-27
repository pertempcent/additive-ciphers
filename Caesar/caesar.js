function encrypt() {
	var str = document.getElementById("plain-text").value;
	var shift = parseInt(document.getElementById("shift").value,10); // Typecasted to int
	document.getElementById("encrypted-message").value = caesarEncrypt(str,shift);
}

function decrypt() {
	var str = document.getElementById("encrypted-text").value;
	var shift = parseInt(document.getElementById("shift").value,10);
	document.getElementById("decrypted-plain-text").value = caesarDecrypt(str,shift);
}


function caesarEncrypt(message, shift) { 
	shift = shift%26
	var num = [];
	for(var i = 0; i < message.length; i++)
		num[i] = shiftCharEnr(message.charCodeAt(i) , shift);
	return String.fromCharCode( ...num );
}

function caesarDecrypt(message, shift) { 
	var num = [];
	for(var i = 0; i < message.length; i++)
		num[i] = shiftCharEnr(message.charCodeAt(i), 26-shift);
	return String.fromCharCode( ...num );
}

function copyOne() {
	const enStr = document.getElementById("encrypted-message");
	enStr.focus(); 
	enStr.select(); // to copy you need to select first
	document.execCommand("copy");
}

function copyTwo() {
	const enStr = document.getElementById("decrypted-plain-text");
	enStr.focus(); 
	enStr.select(); 
	document.execCommand("copy");
}

function shiftCharEnr(x , shift) {
	shift = shift%26
	if (x<=122 && x>=97)
		return ((x+shift)-97)%26+97

	else if (x<=90 && x>=65)
		return ((x+shift)-65)%26+65

	else
		return x;
}

x+shift>122?x+shift-26:x+shift
