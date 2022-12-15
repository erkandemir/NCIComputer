function validateForm ()
{
	var select = document.getElementById("cSelect");
	var index = select.selectedIndex;

	if(index == 0){
		alert('Please select a topic!');
	}
}