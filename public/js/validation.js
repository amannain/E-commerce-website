function validation(name, email, password, age, phone) {
	var errors = [];
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!email.match(mailformat)) {
		errors.push('Please Enter Valid Email Address');
	}
	if (!name || name.length < 3) {
		errors.push('Please Enter Valid last Name');
	}
	if (!age || age < 3 || age > 100) {
		errors.push('Please Enter Valid age');
	}
	if (!phone || phone.length < 10 || phone.length > 13) {
		errors.push('Please Enter Valid phone Number');
	}
	if (!password || password.length < 8) {
		errors.push('password length should be greater than or equal to 8 characters');
	}
	if (errors.length > 0) {
		var error = errors.join('\n');
		alert(error);
		return false;
	}
	return true;
}
