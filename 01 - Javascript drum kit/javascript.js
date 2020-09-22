/*document.getElementById("clap").onclick = function() {
	
	document.getElementById("clap").classList.add("playing");
	
}


var play = function(drum) {
	
	
	
	document.getElementById(drum).classList.add("playing");
	
}

*/


function playSound(e) {
	
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if(!audio) return; //This will stop the function running any further if a key not in the drum kit is pressed
	
	audio.currentTime = 0; //Rewinds the file so that it can be played from the start before it has finished playing
	
	audio.play();
	
	key.classList.add("playing");
	
};


function removeTransition(e) {
	
	if (e.propertyName !== "transform") return //we only want to be dealing with one property

	console.log(e.propertyName);
	
	this.classList.remove("playing");
}



const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);






//var event = "";


//function identify(event) {
//	var x = event.target;
//	console.log(x);
//}


//document.getElementById("keys").onclick = identify(event);


//var select = ["clap", "hihat", "kick"];

//document.getElementById("select[]").onclick = function() {
	
//	play(select);
	
//};