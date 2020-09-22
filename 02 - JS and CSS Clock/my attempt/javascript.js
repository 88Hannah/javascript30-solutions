const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const allHands = document.querySelectorAll(".hand");


function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	
	const secondsDegrees = (seconds * 6) + 90;
	const minutesDegrees = (minutes * 6) + 90;
	const hoursDegrees = (hours * 30) + (minutes / 2) + 90;
	
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `translateX(100%) rotate(${hoursDegrees}deg)`;
	
	if (seconds == 0) {
		secondHand.style.transition = `none`;
	} else {
		secondHand.style.transition = `all 0.5s`;
		secondHand.style.transitionTimingFunction = `cubic-bezier(1, 2.29, 0.58, 1)`;
	}
	
	if (seconds == 0 && minutes == 0) {
		minHand.style.transition = `none`;
	} else {
		minHand.style.transition = `all 0.5s`;
		minHand.style.transitionTimingFunction = `cubic-bezier(1, 2.29, 0.58, 1)`;
	}

	if (seconds == 0 && (hours == 0 || hours == 12)) {
		hourHand.style.transition = `none`;
	} else {
		hourHand.style.transition = `all 0.5s`;
		hourHand.style.transitionTimingFunction = `cubic-bezier(1, 2.29, 0.58, 1)`;
	}
}

setInterval(setDate, 1000);