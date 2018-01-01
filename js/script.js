var minValue = 0;
if (isNaN(parseFloat(localStorage.getItem("min"))) == false){
	minValue = localStorage.getItem("min");
	var data = document.getElementsByClassName("individual_internship");
	for(var i = 0;i < data.length; i++) {
			var stipend = data[i].getElementsByClassName("stipend_container_table_cell")[0].innerText.split(" ")[0];
			if(stipend.indexOf("-") != -1){
				stipend = stipend.split("-")[0];
			}
			if(parseInt(stipend) < minValue){
				data[i].style.display = "none";
			}else{
					data[i].style.display = "inline";
			}
	}
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    minValue = parseInt(request.stipend);
    if(minValue == -1){
    	minValue = localStorage.getItem("min");
    	setTimeout(function() {
 	 		var data = document.getElementsByClassName("individual_internship");
			if(minValue == 0){
				for(var i = 0;i < data.length; i++) {
					var stipend = data[i].getElementsByClassName("stipend_container_table_cell")[0].innerText.split(" ")[0];
					data[i].style.display = "inline";
				}
			} else{
				for(var i = 0;i < data.length; i++) {
					var stipend = data[i].getElementsByClassName("stipend_container_table_cell")[0].innerText.split(" ")[0];
					if(stipend.indexOf("-") != -1){
						stipend = stipend.split("-")[0];
					}
					if(isNaN(parseInt(stipend))){
						data[i].style.display = "none";
					} else if(parseInt(stipend) < minValue){
						data[i].style.display = "none";
					}else{
						data[i].style.display = "inline";	
					}
				}
			}
		}, 4000);
    }else{
	    localStorage.setItem("min", minValue);
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
				if(isNaN(parseInt(stipend))){
					data[i].style.display = "none";
				}else if(parseInt(stipend) < minValue){
					data[i].style.display = "none";
				}else{
					data[i].style.display = "inline";	
				}
			}
		}	
    }
});