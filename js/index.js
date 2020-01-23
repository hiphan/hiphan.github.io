'use strict';

let currPage;

function findCurrPage() {
	if (document.documentElement.scrollTop >= 2 * document.documentElement.scrollHeight / 3) {
		currPage = 3;
	} else if (document.documentElement.scrollTop >= 1 * document.documentElement.scrollHeight / 3) {
		currPage = 2;
	} else {
		currPage = 1;
	}
	$('input[type="radio"]:nth-of-type(' + currPage + ')').prop('checked', true);
}

function scrollTo(newP) {
	window.scrollBy({
		top: (newP - currPage) * window.innerHeight,
		left: 0,
		behavior: 'smooth'
	});
	currPage = newP;
}

$(document).ready(function() {
	findCurrPage();

	$('input[type="radio"]').on('click', function() {
		let newPage;
		switch($(this).attr("id")) {
			case "homeButton": 
				newPage = 1;
				break;

			case "experienceButton":
				newPage = 2;
				break;

			case "projectButton":
				newPage = 3;
				break;
		}
		scrollTo(newPage);
	});

	$('button.scroll-down-button').on('click', function() {
		let newPage = currPage + 1;
		$('input[type="radio"]:nth-of-type(' + currPage + ')').prop('checked', false);
		$('input[type="radio"]:nth-of-type(' + newPage + ')').prop('checked', true);
		scrollTo(newPage);
	});

	$('button.scroll-up-button').on('click', function() {
		let newPage = currPage - 1;
		$('input[type="radio"]:nth-of-type(' + currPage + ')').prop('checked', false);
		$('input[type="radio"]:nth-of-type(' + newPage + ')').prop('checked', true);
		scrollTo(newPage);
	});
})