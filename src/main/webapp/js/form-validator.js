const validate = function(formData, regexpStyle) {
	var r;
	if(regexpStyle == "only letters with accent") {
		r = new RegExp("^[a-zA-ZÀ-ÿ- ]*$");
	} else if ( regexpStyle == "adresse postale" ) {
		r = new RegExp("[a-zA-Z 0-9, ]");
	}
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
	return (toCheck == "" || toCheck === undefined)
};


