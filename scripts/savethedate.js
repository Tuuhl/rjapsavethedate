var main = function() {

	var countdownDate = new Date("Oct 12, 2019 14:00").getTime();
	var now = new Date().getTime();
	
	var distance = countdownDate - now;
	
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	
	$("#timer").text(days + " days");
	
	$("#emblem").click(function(){
		window.location.href='https://www.youtube.com/watch?v=dmM32uCVR_A';
	});
}

$(document).ready(main);