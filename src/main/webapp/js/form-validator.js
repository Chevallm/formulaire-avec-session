const r = new RegExp("^[a-zA-ZÀ-ÿ- ]*$");

const validate = function(formData) {
	var isValid = false;
	for(var input in formData) {
		
		if(isEmpty(formData[input])){
			return false;
		} else if(! r.test(formData[input])) {
			return false;
		} else {
			isValid = true;
		}
	}
	return isValid;
};

const isEmpty = function(toCheck) {
	return (toCheck == "" || toCheck === "undefined")
};


