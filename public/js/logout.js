function logout() {
	sessionStorage.removeItem('currentUser');
	location.assign('login.html');
}
