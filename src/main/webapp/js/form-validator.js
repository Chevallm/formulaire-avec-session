var r = new RegExp("^[a-z A-Z-éèààâäêëûüùç]*$");

var validate = function(formData) {
	var isValid = false;
	for(var input in formData) {
		
		if( isEmpty(formData[input])){
			return false;
		} else if(! r.test(formData[input])) {
			return false;
		} else {
			isValid = true;
		}
	}
	return isValid;
}

var isEmpty = function(toCheck) {
	return (toCheck == "" || toCheck === "undefined")
}


