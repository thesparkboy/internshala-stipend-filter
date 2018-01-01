var minValue = 0;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    minValue = parseInt(request.stipend);
	console.log(request);
	var data = document.getElementsByClassName("individual_internship");
	if(minValue == 0){
		for(var i = 0;i < data.length; i++) {
			var stipend = data[i].getElementsByClassName("stipend_container_table_cell")[0].innerText.split(" ")[0];
			data[i].style.display = "inline";
		}
	}else{
		for(var i = 0;i < data.length; i++) {
			var stipend = data[i].getElementsByClassName("stipend_container_table_cell")[0].innerText.split(" ")[0];
			if(stipend.indexOf("-") != -1){
				stipend = stipend.split("-")[0];
			}
			if(parseInt(stipend) < minValue){
				data[i].style.display = "none";
			}
		}
	    if (request.stipend == "hello")
	      sendResponse({farewell: "goodbye"});
		}
  });
/*var minValue = 4000;
console.log('11111');

chrome.runtime.onMessage.addListener(function(request, value, sendResponse) {
	console.log(document.getElementById("stpnd").value)
	minValue = 5000;
	console.log(minValue);
	var data = document.getElementsByClassName("individual_internship");
	for(var i = 0;i < data.length; i++){
		//data[i].style.display = "none";	
		//console.log(data[0]);
		var stipend = data[i].getElementsByClassName("stipend_container_table_cell")[0].innerText.split(" ")[0];
		if(stipend.indexOf("-") != -1){
			stipend = stipend.split("-")[0];
		}
		if(parseInt(stipend) < minValue){
			data[i].style.display = "none";
		}
		console.log(stipend);
	}
});*/
/*
console.log(document.getElementById("stpnd").value);
var minValue = 5000;
console.log(minValue);
var data = document.getElementsByClassName("individual_internship");
for(var i = 0;i < data.length; i++) {
	//data[i].style.display = "none";	
	//console.log(data[0]);
	var stipend = data[i].getElementsByClassName("stipend_container_table_cell")[0].innerText.split(" ")[0];
	if(stipend.indexOf("-") != -1){
		stipend = stipend.split("-")[0];
	}
	if(parseInt(stipend) < minValue){
		data[i].style.display = "none";
	}
	console.log(stipend);
}*/