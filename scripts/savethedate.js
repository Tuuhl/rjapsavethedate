var main = function() {

	var countdownDate = new Date("Oct 12, 2019 14:00").getTime();
	var now = new Date().getTime();
	
	var distance = countdownDate - now;
	
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	
	$("#timer").text(days + "d " + hours + "h " + minutes + "m");
}

$(document).ready(main);