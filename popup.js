document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#stipend').addEventListener(
      'click', onClk);
});

function onClk(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {stipend: document.getElementById("stpnd").value}, function(response) {
	    console.log(response.farewell);
	  });
	});
}