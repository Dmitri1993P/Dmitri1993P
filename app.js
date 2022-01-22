
let studyButton = document.querySelector("#button1");
let textInput = document.querySelector("#randomtext");

studyButton.addEventListener("click", function(){
	textInput.innerHTML = getRandomStr();
});

function getRandomStr(){
	let str = "abcdefghijklmnopqrstuvwxyz1234567890";
	let randomArr = [];
	let readyStr = "";
	for (let i = 0; i < 50; i++) {
		randomArr.push(str[getRandomInt(0,str.length-1)])
	}
	readyStr = randomArr.join("");
	return readyStr;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}




