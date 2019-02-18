var main = function() {

	var countdownDate = new Date("Oct 12, 2019 14:00").getTime();
	var now = new Date().getTime();
	
	var distance = countdownDate - now;
	
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	
	$("#timer").text(days + " days ");
}

$(document).ready(main);