'use strict'

$(document).ready(init);

var $cups = [];

function init() {

$('#holder').on('click', '.cup', clickCup);
$('#addCup').on('click', addCups);
$('#numCups').on('submit', addCups);
$("#numCups").keypress(function (e) {
  if (e.keyCode === 0 || e.keyCode === 13) {
    e.preventDefault()
    addCups();
  }
});
$(window).keypress(function(e) {
  if (e.keyCode == 0 || e.keyCode == 32) {
    $('body').css('background-color', randomColor);
    $('h1').css('color', randomColor);
  }
});
}

function addCups() {
	var numCups = $('#numCups').val();
	

	for (var i = 0; i < numCups; i++) {
		var $cup = $('<div>').addClass("cup");
		$cup.css('background-color', randomColor);
		$cups.push($cup);
	}

	$("#holder").append($cups);
}

function clickCup() {
	this.style.backgroundColor = randomColor();

}

function randomColor() {
	return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}