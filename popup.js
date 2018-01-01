document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#stipend').addEventListener('click', onClk);
});

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#reset').addEventListener('click', reset);
});

function onClk(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {stipend: document.getElementById("stpnd").value}, function(response) {
			console.log(response.farewell);
		});
	});
}

function reset(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {stipend: 0}, function(response) {
			console.log(response.farewell);
		});
	});
}