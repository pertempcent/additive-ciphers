function encrypt() {
	var str = document.getElementById("plain-text").value;
	var key = document.getElementById("keyword").value
	document.getElementById("encrypted-message").value = vEncrypt(str,key);
}

function decrypt() {
	var str = document.getElementById("encrypted-text").value;
	var key = document.getElementById("keyword").value
	document.getElementById("decrypted-plain-text").value = vDecrypt(str,key);
}


function vEncrypt(message , key){
	var key2 = key
	while(key2.length<=message.length){
		key2+=key
	}
	var num = []
	for(var i =0 ; i< message.length;i++)
		num[i] = shiftCharEnr(message.charCodeAt(i) , key2.charCodeAt(i) - 97 );
	return String.fromCharCode( ...num );
}

function vDecrypt(message , key){

	console.log(message+"   "+ key)
	var key2 = key
	while(key2.length<=message.length){
		key2+=key
	}

	var num = []
	for(var i =0 ; i< message.length;i++)
		num[i] = shiftCharEnr(message.charCodeAt(i) , 26 - ( key2.charCodeAt(i) - 97 ) );
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
