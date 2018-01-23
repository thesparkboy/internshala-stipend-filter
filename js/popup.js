document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#stipend').addEventListener('click', onClk);
});

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#reset').addEventListener('click', reset);
});

function onClk(){
	if(isNaN(parseInt(document.getElementById("stpnd").value)) || parseInt(document.getElementById("stpnd").value) < 0){
		alert('Please enter a valid number greater than 0.');
	} else{
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {stipend: document.getElementById("stpnd").value}, function(response) {
				console.log(response);
			});
		});
	}
}

function reset(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {stipend: 0}, function(response) {
			console.log(response);
		});
	});
}