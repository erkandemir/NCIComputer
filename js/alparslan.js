	function validateForm() {
		var input = document.getElementById("selectElement");
		var index = input.selectedIndex;
		var input2 = document.getElementById("selectCounty");
		var index2 = input2.selectedIndex;
		
    if (index == 0) {
     	alert("Select a Product");
    }
    else if(index2 == 0)
    {
		alert("Select a County");
    }
  }




